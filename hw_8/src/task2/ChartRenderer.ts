import IRenderChart from "./IRenderChart"

export default class ChartRenderer{
  constructor(
    private chartStrategy: IRenderChart
  ) { }
  render(data: number[]) {
    this.chartStrategy.render(data)
  }
}