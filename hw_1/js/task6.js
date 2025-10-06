"use strict";
var _a;
if (confirm('Ну що? Порахуємо?')) {
    const USD = 41.1;
    const EUR = 47.83;
    const EUR_USD_COEF = EUR / USD;
    const moneyAmount = parseFloat(prompt('Введіть кількість грошей', '100'));
    const currentCurrency = ((_a = prompt('Яка валюта? (uah/usd/eur)')) !== null && _a !== void 0 ? _a : 'uah').toUpperCase();
    let totalHTML = '';
    if (currentCurrency === "UAH") {
        const usdFromUah = moneyAmount / USD;
        const eurFromUah = moneyAmount / EUR;
        totalHTML = `${moneyAmount}₴ - ${usdFromUah.toFixed(2)}$ <br>
                ${moneyAmount}₴ - ${eurFromUah.toFixed(2)}€`;
    }
    else if (currentCurrency === "USD") {
        const uahFromUsd = moneyAmount * USD;
        const eurFromUsd = moneyAmount / EUR_USD_COEF;
        totalHTML = `${moneyAmount}$ - ${uahFromUsd.toFixed(2)}₴ <br>
                ${moneyAmount}$ - ${eurFromUsd.toFixed(2)}€`;
    }
    else if (currentCurrency === "EUR") {
        const uahFromEur = moneyAmount * EUR;
        const usdFromEur = moneyAmount * EUR_USD_COEF;
        totalHTML = `${moneyAmount}€ - ${uahFromEur.toFixed(2)}₴ <br>
                ${moneyAmount}€ - ${usdFromEur.toFixed(2)}$`;
    }
    else
        totalHTML = 'Вибачте, ми не маємо такої валюти.';
    document.write(totalHTML);
}
