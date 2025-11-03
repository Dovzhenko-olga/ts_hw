import DataProcessor from "./DataProcessor.js";
DataProcessor.processData('hELLO!');
DataProcessor.processData(2155);
DataProcessor.processData(['Hello', 'world']);
// @ts-expect-error
DataProcessor.processData([12, 54]);
