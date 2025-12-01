"use strict";
// 🏗️ Конструювання HTML-документа або сторінки
// Розроби клас-будівельник HtmlBuilder, який покроково формує HTML-структуру: додає заголовки, абзаци, списки, таблиці тощо.
// Мета - продемонструвати зручність поетапного створення складних текстових або ієрархічних структур.
class HtmlBuilder {
    constructor() {
        this.container = [];
    }
    addTitle(header, level = 1) {
        this.container.push(`<h${level}>${header}</h${level}>`);
        return this;
    }
    addParagraph(topic) {
        this.container.push(`<p>${topic}</p>`);
        return this;
    }
    addList(listItems, ordered) {
        const listTag = ordered ? 'ol' : 'ul';
        const list = listItems === null || listItems === void 0 ? void 0 : listItems.map(item => `<li>${item}</li>`).join('');
        this.container.push(`<${listTag}>${list}</${listTag}>`);
        return this;
    }
    build() {
        return this.container.join('\n');
    }
}
const htmlDoc = new HtmlBuilder()
    .addTitle("Мій документ")
    .addParagraph("Це приклад використання шаблону Builder для HTML.")
    .addList(["Перший пункт", "Другий пункт", "Третій пункт"], true)
    .build();
document.body.insertAdjacentHTML('afterend', htmlDoc);
