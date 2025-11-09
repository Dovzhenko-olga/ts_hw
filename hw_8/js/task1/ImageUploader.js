export default class ImageUploader {
    constructor(compressor, loader, logger) {
        this.compressor = compressor;
        this.loader = loader;
        this.logger = logger;
    }
    uploadImage(filePath) {
        const compressed = this.compressor.compress(filePath);
        this.loader.upload(compressed);
        this.logger.logAction(`File ${filePath} uploaded successfully.`);
    }
}
