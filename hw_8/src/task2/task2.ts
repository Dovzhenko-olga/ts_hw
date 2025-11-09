// Задача 2. Побудова графіків:
// Клас ChartRenderer створює різні типи графіків: лінійний, стовпчиковий, круговий.
// Якщо потрібно додати новий тип графіка, код доведеться змінювати.
// ❌ Неправильна реалізація — порушення принципу відкритості/закритості
// class ChartRendererBad {
//   renderChart(type: string, data: number[]) {
//     if (type === "line") {
//       console.log("Rendering line chart with", data);
//     } else if (type === "bar") {
//       console.log("Rendering bar chart with", data);
//     } else if (type === "pie") {
//       console.log("Rendering pie chart with", data);
//     } else {
//       console.log("Unknown chart type");
//     }
//   }
// }

import BarChart from "./BarChart.js"
import ChartRenderer from "./ChartRenderer.js"

const myChart = new ChartRenderer(new BarChart)
myChart.render([12, 3, 4, 9, 7])