"use strict";
const totalPrice = ({ price, discount, isInstallment, months }) => {
    if (isInstallment) {
        return (price - price * (discount / 100)) / months;
    }
    return price - price * (discount / 100);
};
const price = totalPrice({
    price: 100000,
    discount: 25,
    isInstallment: true,
    months: 12,
});
const price2 = totalPrice({
    price: 100000,
    discount: -10,
    isInstallment: false,
    months: 12,
});
console.log(price); // 6250
console.log(price2); // 6250
