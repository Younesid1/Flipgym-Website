import AppKit
import CoreImage
import CoreImage.CIFilterBuiltins
import Foundation
import ImageIO
import Vision

if CommandLine.arguments.count < 3 {
  fputs("Usage: replace-portrait-background <input> <output> [quality]\n", stderr)
  exit(2)
}

let inputPath = CommandLine.arguments[1]
let outputPath = CommandLine.arguments[2]
let quality = CommandLine.arguments.count >= 4
  ? max(0.0, min(1.0, Double(CommandLine.arguments[3]) ?? 0.82))
  : 0.82

let inputURL = URL(fileURLWithPath: inputPath)
let outputURL = URL(fileURLWithPath: outputPath)

guard let source = CGImageSourceCreateWithURL(inputURL as CFURL, nil),
      let image = CGImageSourceCreateImageAtIndex(source, 0, nil)
else {
  fputs("Unable to read input: \(inputPath)\n", stderr)
  exit(1)
}

let width = image.width
let height = image.height
let extent = CGRect(x: 0, y: 0, width: width, height: height)
let context = CIContext(options: [.workingColorSpace: CGColorSpace(name: CGColorSpace.sRGB)!])

let request = VNGeneratePersonSegmentationRequest()
request.qualityLevel = .accurate
request.outputPixelFormat = kCVPixelFormatType_OneComponent8

let handler = VNImageRequestHandler(cgImage: image, options: [:])
do {
  try handler.perform([request])
} catch {
  fputs("Unable to segment person: \(error)\n", stderr)
  exit(1)
}

guard let maskBuffer = request.results?.first?.pixelBuffer else {
  fputs("Unable to create person mask\n", stderr)
  exit(1)
}

let original = CIImage(cgImage: image)
let rawMask = CIImage(cvPixelBuffer: maskBuffer)
let scaleX = CGFloat(width) / rawMask.extent.width
let scaleY = CGFloat(height) / rawMask.extent.height
let mask = rawMask
  .transformed(by: CGAffineTransform(scaleX: scaleX, y: scaleY))
  .cropped(to: extent)
  .applyingFilter("CIGaussianBlur", parameters: [kCIInputRadiusKey: 1.2])
  .cropped(to: extent)

let topColor = CIColor(red: 0.94, green: 0.985, blue: 1.0, alpha: 1)
let bottomColor = CIColor(red: 0.70, green: 0.86, blue: 0.97, alpha: 1)
let linearGradient = CIFilter.linearGradient()
linearGradient.point0 = CGPoint(x: width / 2, y: height)
linearGradient.point1 = CGPoint(x: width / 2, y: 0)
linearGradient.color0 = topColor
linearGradient.color1 = bottomColor

let glow = CIFilter.radialGradient()
glow.center = CGPoint(x: width / 2, y: Int(Double(height) * 0.64))
glow.radius0 = Float(Double(min(width, height)) * 0.08)
glow.radius1 = Float(Double(max(width, height)) * 0.74)
glow.color0 = CIColor(red: 1, green: 1, blue: 1, alpha: 0.36)
glow.color1 = CIColor(red: 0.06, green: 0.28, blue: 0.55, alpha: 0.08)

let background = glow.outputImage!
  .cropped(to: extent)
  .composited(over: linearGradient.outputImage!.cropped(to: extent))

let blend = CIFilter.blendWithMask()
blend.inputImage = original
blend.backgroundImage = background
blend.maskImage = mask

guard let outputImage = blend.outputImage,
      let outputCGImage = context.createCGImage(outputImage.cropped(to: extent), from: extent),
      let destination = CGImageDestinationCreateWithURL(outputURL as CFURL, "public.avif" as CFString, 1, nil)
else {
  fputs("Unable to create output: \(outputPath)\n", stderr)
  exit(1)
}

let options = [
  kCGImageDestinationLossyCompressionQuality: quality
] as CFDictionary

CGImageDestinationAddImage(destination, outputCGImage, options)

if !CGImageDestinationFinalize(destination) {
  fputs("Unable to finalize AVIF output: \(outputPath)\n", stderr)
  exit(1)
}
