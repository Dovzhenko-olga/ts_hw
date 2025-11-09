// Клас і завантажує, і стискає, і логує дії.
// ❌ Неправильна реалізація
// class ImageUploaderBad {
//   uploadImage(filePath: string) {
//     const compressed = this.compressImage(filePath);
//     console.log(`Uploading ${compressed} to server...`);
//     this.logAction(`File ${filePath} uploaded successfully.`);
//   }
//   private compressImage(path: string): string {
//     console.log(`Compressing image: ${path}`);
//     return `compressed_${path}`;
//   }
//   private logAction(message: string) {
//     const timestamp = new Date().toISOString();
//     console.log(`[${timestamp}] LOG: ${message}`);
//   }
// }
import ImageCompressor from "./ImageCompressor.js"
import ImageUploader from "./ImageUploader.js"
import Loader from "./Loader.js"
import Logger from "./Logger.js"

const imageObj = new ImageUploader(new ImageCompressor, new Loader, new Logger)
imageObj.uploadImage('Path_to_img')
