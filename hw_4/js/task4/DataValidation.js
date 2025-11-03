export default class DataValidation {
    static checkData(data) {
        if (typeof data.name === 'string' &&
            typeof data.age === 'number' &&
            typeof data.isAdult === 'boolean') {
            if (data.isAdult)
                console.log(`${data.name} повнолітній.`);
            else
                console.log(`${data.name} ще треба підрости :)`);
        }
        else
            throw new Error('Дані не валідні :(');
    }
}
