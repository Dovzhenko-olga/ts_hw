"use strict";
// Є продукти: Book (має author), Electronics (має warranty), Clothes (має size). Продукти можуть бути onSale або
// regularPrice. Створити тип ShopProduct, який об’єднує тип продукту та його статус, використовуючи & і |.
const book = {
    author: 'Azimov',
    discount: 'regularPrice'
};
const tv = {
    warranty: new Date(),
    discount: 'onSale',
};
const shirt = {
    size: 'XS',
    discount: 'onSale',
};
document.write(`This awesome book of ${book.author} is about ${book.discount}.`);
