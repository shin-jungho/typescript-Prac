let someValue = 5; //any: => 타입 체크 x 하겠다는 소리
someValue = 'hello';
someValue = true;
let totalCost;
let orderID;
const calculateTotalCost = (price, qty) => {
};
const findOrderID = (customer, productId) => {
    return orderID;
};
// type guard
let itemPrice;
const setItemPrice = (price) => {
    if (typeof price === 'string') {
        itemPrice = 0;
    }
    else {
        itemPrice = price;
    }
};
console.log(setItemPrice(50));
