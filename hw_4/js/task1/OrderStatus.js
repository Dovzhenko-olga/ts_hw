var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "\u041E\u0447\u0456\u043A\u0443\u0454";
    OrderStatus["PROCESSING"] = "\u041E\u0431\u0440\u043E\u0431\u043B\u044F\u0454\u0442\u044C\u0441\u044F";
    OrderStatus["SHIPPED"] = "\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E";
    OrderStatus["DELIVERED"] = "\u0414\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E";
    OrderStatus["CANCELLED"] = "\u0421\u043A\u0430\u0441\u043E\u0432\u0430\u043D\u043E";
})(OrderStatus || (OrderStatus = {}));
export default OrderStatus;
