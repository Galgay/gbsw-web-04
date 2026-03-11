let a = 10;
let b = 20;

console.log(a > b); // false
console.log(a == b); // false
console.log(a != b); // true

// 'A' 에서 'Z' 로 갈 수록 아스키코드 값이 커진다.
console.log("A" < "B"); // true
console.log("ABCD" > "ABDC"); // false

let size1 = 1024;
let size2 = "1024";

// 동등 연산자는 값이 같은지만 비교
console.log(size1 == size2); // true
// 일치 연산자는 값과 타입까지 엄격하게 비교
console.log(size1 === size2); // false

let age = 27;
// 조건부 연산자 (삼항 연산자)
// condition ? value1 : value2
// condition이 true인 경우 value1, false인 경우 value2 반환
let result = (age >= 19) ? "성인입니다" : "더 자라렴";
console.log(result);