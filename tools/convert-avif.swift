import Foundation
import ImageIO

if CommandLine.arguments.count < 3 {
  fputs("Usage: convert-avif <input> <output> [quality]\n", stderr)
  exit(2)
}

let inputPath = CommandLine.arguments[1]
let outputPath = CommandLine.arguments[2]
let quality = CommandLine.arguments.count >= 4
  ? max(0.0, min(1.0, Double(CommandLine.arguments[3]) ?? 0.82))
  : 0.82

let inputURL = URL(fileURLWithPath: inputPath)
let outputURL = URL(fileURLWithPath: outputPath)

guard let source = CGImageSourceCreateWithURL(inputURL as CFURL, nil) else {
  fputs("Unable to read input: \(inputPath)\n", stderr)
  exit(1)
}

guard let destination = CGImageDestinationCreateWithURL(
  outputURL as CFURL,
  "public.avif" as CFString,
  1,
  nil
) else {
  fputs("Unable to create AVIF output: \(outputPath)\n", stderr)
  exit(1)
}

let options = [
  kCGImageDestinationLossyCompressionQuality: quality
] as CFDictionary

CGImageDestinationAddImageFromSource(destination, source, 0, options)

if !CGImageDestinationFinalize(destination) {
  fputs("Unable to finalize AVIF output: \(outputPath)\n", stderr)
  exit(1)
}
