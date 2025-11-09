export default class Logger{
  logAction(message: string) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] LOG: ${message}`);
  }
}