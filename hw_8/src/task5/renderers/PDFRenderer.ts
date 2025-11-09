import IRenderer from "../IRenderer"

export default class PDFRenderer implements IRenderer {
  render(content: string) {
    console.log(`PDF: ${content}`)
  }
}