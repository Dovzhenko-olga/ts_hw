// PageRenderer напряму залежить від HTMLTemplateRenderer, тому не можна підставити інший тип рендерингу (Markdown, PDF).
// class HTMLTemplateRendererBad {
//   render(content: string) {
//     console.log(`<html>${content}</html>`);
//   }
// }
// class PageRendererBad {
//   private renderer = new HTMLTemplateRendererBad(); // ❌ залежність від конкретного класу
//   showPage(text: string) {
//     this.renderer.render(text);
//   }
// }
import PageRenderer from "./PageRenderer.js";
import HTMLTemplateRenderer from "./renderers/HTMLTemplateRenderer.js";
import MarkdownRenderer from "./renderers/MarkdownRenderer.js";
import PDFRenderer from "./renderers/PDFRenderer.js";
const pageHTMLRendererObj = new PageRenderer(new HTMLTemplateRenderer);
pageHTMLRendererObj.showPage('My page');
const pageMarkdownRendererObj = new PageRenderer(new MarkdownRenderer);
pageMarkdownRendererObj.showPage('Hello!');
const pagePDFRendererObj = new PageRenderer(new PDFRenderer);
pagePDFRendererObj.showPage('document');
