let someValue: any = 5; //any: => 타입 체크 x 하겠다는 소리
someValue = 'hello';
someValue = true;

// let price: number | string = 5; => 계속 사용할때 재활용할 수 있게 하기
// price = 'free';
// price = true; error 뜸 number, string이 아니므로 error

type StrOrNum = number | string; // type키워드를 사용해서 하는걸 type aliases라 부름
let totalCost: number;
let orderID: StrOrNum;

const calculateTotalCost = (price: StrOrNum, qty: 
number):void => {

};

const findOrderID = (customer: {
  customerId: StrOrNum, name: string},
  productId: StrOrNum): StrOrNum => {
    return orderID
  }

  // type guard
  let itemPrice: number;

  const setItemPrice = (price: StrOrNum):void => {
    if (typeof price === 'string') {
      itemPrice = 0;
    } else {
      itemPrice = price;
    }
  }

  console.log(setItemPrice(50));
