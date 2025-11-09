import IRenderChart from "./IRenderChart"

export default class LinearChart implements IRenderChart{
  render(data: number[]): void {
    console.log("Rendering line chart with", data)
  }
}