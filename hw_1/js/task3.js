"use strict";
if (confirm('Почнемо покупки?')) {
    function getProduct() {
        var _a;
        const title = (_a = prompt('Назва товару')) !== null && _a !== void 0 ? _a : 'Product';
        const price = parseFloat(prompt('Ціна товару'));
        const count = parseInt(prompt('Кількість'));
        return {
            title,
            price,
            count
        };
    }
    const product1 = getProduct();
    const product2 = getProduct();
    const productsList = [product1, product2];
    function getBill(products) {
        document.write(`<h3>Фіскальний чек</h3>`);
        let total = 0;
        products.forEach(prod => {
            const cost = prod.count * prod.price;
            document.write(`${prod.title}: ${prod.count} x ${prod.price}грн. - ${cost}грн.<br>`);
            total += cost;
        });
        document.write(`Всього: ${total}грн.`);
    }
    getBill(productsList);
}
