"use strict";
// 🔐 Контроль прав доступу (Security Proxy)
// Завдання:  Опиши інтерфейс DocumentAccess з методом readDocument(id: number).
// Створи: RealDocumentService, який “завантажує” документ;
// SecureDocumentProxy, який перевіряє роль користувача (admin, guest, user) перед доступом.
// Мета: реалізувати контроль доступу до чутливих ресурсів через проксі.
class RealDocumentService {
    readDocument(id) {
        console.log(`📄 Завантаження документа з id ${id}`);
    }
}
class SecureDocumentProxy {
    constructor(userRole) {
        this.userRole = userRole;
        this.document = new RealDocumentService;
    }
    readDocument(id) {
        console.log("[Proxy] Перевірка ролі користувача....");
        if (this.userRole === 'admin' || this.userRole === 'user') {
            this.document.readDocument(id);
            console.log("[Proxy] Документ успішно завантажено.");
        }
        else
            console.log("[Proxy] Нажаль у Вас немає прав доступу до цього документа.");
    }
}
console.log('=========Адмін=========');
const documentRequest1 = new SecureDocumentProxy('admin');
documentRequest1.readDocument(256);
console.log('=========Гість=========');
const documentRequest2 = new SecureDocumentProxy('guest');
documentRequest2.readDocument(14);
