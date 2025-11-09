export default class ImageCompressor {
    compress(path) {
        console.log(`Compressing image: ${path}`);
        return `compressed_${path}`;
    }
}
