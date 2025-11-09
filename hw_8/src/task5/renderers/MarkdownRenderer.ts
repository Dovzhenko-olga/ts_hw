import IRenderer from "../IRenderer"

export default class MarkdownRenderer implements IRenderer {
  render(content: string) {
    console.log(`Markdown: ${content}`)
  }
}