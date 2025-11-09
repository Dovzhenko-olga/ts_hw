import IRenderer from "./IRenderer"

export default class PageRenderer {
  constructor(private renderer: IRenderer) { }
  showPage(text: string) {
    this.renderer.render(text);
  }
}