export default class Logger {
    logAction(message) {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] LOG: ${message}`);
    }
}
