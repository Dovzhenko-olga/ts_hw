import ImageCompressor from "./ImageCompressor"
import Loader from "./Loader"
import Logger from "./Logger"

export default class ImageUploader{
  constructor(
    private compressor: ImageCompressor,
    private loader: Loader,
    private logger: Logger
  ) { }
  
   uploadImage(filePath: string) {
    const compressed = this.compressor.compress(filePath);
    this.loader.upload(compressed)
    this.logger.logAction(`File ${filePath} uploaded successfully.`)
  }
}