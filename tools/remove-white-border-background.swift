import Foundation
import ImageIO
import CoreGraphics

if CommandLine.arguments.count < 3 {
  fputs("Usage: remove-white-border-background <input> <output.png>\n", stderr)
  exit(2)
}

let inputPath = CommandLine.arguments[1]
let outputPath = CommandLine.arguments[2]
let inputURL = URL(fileURLWithPath: inputPath)
let outputURL = URL(fileURLWithPath: outputPath)

guard
  let source = CGImageSourceCreateWithURL(inputURL as CFURL, nil),
  let image = CGImageSourceCreateImageAtIndex(source, 0, nil)
else {
  fputs("Unable to read input image\n", stderr)
  exit(1)
}

let width = image.width
let height = image.height
let bytesPerPixel = 4
let bytesPerRow = width * bytesPerPixel
var pixels = [UInt8](repeating: 0, count: height * bytesPerRow)

let colorSpace = CGColorSpaceCreateDeviceRGB()
guard let context = CGContext(
  data: &pixels,
  width: width,
  height: height,
  bitsPerComponent: 8,
  bytesPerRow: bytesPerRow,
  space: colorSpace,
  bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue
) else {
  fputs("Unable to create bitmap context\n", stderr)
  exit(1)
}

context.draw(image, in: CGRect(x: 0, y: 0, width: width, height: height))

func offset(_ x: Int, _ y: Int) -> Int {
  y * bytesPerRow + x * bytesPerPixel
}

func isLikelyBackground(_ x: Int, _ y: Int) -> Bool {
  let index = offset(x, y)
  let r = Int(pixels[index])
  let g = Int(pixels[index + 1])
  let b = Int(pixels[index + 2])
  let maxChannel = max(r, max(g, b))
  let minChannel = min(r, min(g, b))
  return maxChannel >= 238 && minChannel >= 226 && (maxChannel - minChannel) <= 28
}

var visited = [Bool](repeating: false, count: width * height)
var queue = [(Int, Int)]()
queue.reserveCapacity(width * 2 + height * 2)

func enqueue(_ x: Int, _ y: Int) {
  guard x >= 0, x < width, y >= 0, y < height else { return }
  let key = y * width + x
  guard !visited[key], isLikelyBackground(x, y) else { return }
  visited[key] = true
  queue.append((x, y))
}

for x in 0..<width {
  enqueue(x, 0)
  enqueue(x, height - 1)
}
for y in 0..<height {
  enqueue(0, y)
  enqueue(width - 1, y)
}

var head = 0
while head < queue.count {
  let (x, y) = queue[head]
  head += 1
  enqueue(x + 1, y)
  enqueue(x - 1, y)
  enqueue(x, y + 1)
  enqueue(x, y - 1)
}

for y in 0..<height {
  for x in 0..<width where visited[y * width + x] {
    let index = offset(x, y)
    pixels[index + 3] = 0
  }
}

var minX = width
var minY = height
var maxX = -1
var maxY = -1
for y in 0..<height {
  for x in 0..<width {
    if pixels[offset(x, y) + 3] > 0 {
      minX = min(minX, x)
      minY = min(minY, y)
      maxX = max(maxX, x)
      maxY = max(maxY, y)
    }
  }
}

if maxX < minX || maxY < minY {
  fputs("No foreground pixels found\n", stderr)
  exit(1)
}

let padding = 18
minX = max(0, minX - padding)
minY = max(0, minY - padding)
maxX = min(width - 1, maxX + padding)
maxY = min(height - 1, maxY + padding)

let croppedWidth = maxX - minX + 1
let croppedHeight = maxY - minY + 1
let croppedBytesPerRow = croppedWidth * bytesPerPixel
var croppedPixels = [UInt8](repeating: 0, count: croppedHeight * croppedBytesPerRow)

for y in 0..<croppedHeight {
  for x in 0..<croppedWidth {
    let sourceIndex = offset(minX + x, minY + y)
    let targetIndex = y * croppedBytesPerRow + x * bytesPerPixel
    croppedPixels[targetIndex] = pixels[sourceIndex]
    croppedPixels[targetIndex + 1] = pixels[sourceIndex + 1]
    croppedPixels[targetIndex + 2] = pixels[sourceIndex + 2]
    croppedPixels[targetIndex + 3] = pixels[sourceIndex + 3]
  }
}

guard
  let outputContext = CGContext(
    data: &croppedPixels,
    width: croppedWidth,
    height: croppedHeight,
    bitsPerComponent: 8,
    bytesPerRow: croppedBytesPerRow,
    space: colorSpace,
    bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue
  ),
  let outputImage = outputContext.makeImage(),
  let destination = CGImageDestinationCreateWithURL(outputURL as CFURL, "public.png" as CFString, 1, nil)
else {
  fputs("Unable to create output image\n", stderr)
  exit(1)
}

CGImageDestinationAddImage(destination, outputImage, nil)
if !CGImageDestinationFinalize(destination) {
  fputs("Unable to write output image\n", stderr)
  exit(1)
}
