export default class ImageCompressor{
  compress(path: string): string {
    console.log(`Compressing image: ${path}`);
    return `compressed_${path}`;
  }
}