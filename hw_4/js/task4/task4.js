import DataValidation from "./DataValidation.js";
const data1 = {
    name: 'Olga',
    age: 43,
    isAdult: true,
};
const data2 = {
    name: 'Viktor',
    age: 17,
    isAdult: false,
};
DataValidation.checkData(data1);
DataValidation.checkData(data2);
// @ts-expect-error
DataValidation.checkData({ name: 'Piter', age: 23 });
