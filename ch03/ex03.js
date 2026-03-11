let a = 10;
let b = a;

a = 15;
console.log(b); // 10 -> b = a; 시점에 값만 복사되어서 변하지 않는다

const obj1 = { a: 5, b: 8 };
const obj2 = obj1;

obj2.a = 10;

// 참조형 데이터의 경우 복사 시, 값 복사가 아닌 참조값의 복사가 일어나기때문에
// 원본 데이터를 변경 시, 나머지에도 영향을 준다.
console.log(obj1);
console.log(obj2); 
