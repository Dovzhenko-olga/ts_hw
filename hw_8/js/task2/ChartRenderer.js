export default class ChartRenderer {
    constructor(chartStrategy) {
        this.chartStrategy = chartStrategy;
    }
    render(data) {
        this.chartStrategy.render(data);
    }
}
