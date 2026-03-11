// 산술 연산자 실습
const a = 10;
const b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000

// 피연산자 하나가 String인 경우
const str = "hi";
const numStr = "10";

// + 연산자의 경우 String으로 형변환해 문자열을 이어붙여준다.
console.log(str + b); // hi3
console.log(numStr + b); // 103

// 이외의 연산자는 Number로 형변환해 연산을 시도한다.
console.log(numStr - b);
console.log(numStr * b);
console.log(numStr / b);
console.log(numStr % b);
console.log(numStr ** b);

// Number로 형변환 실패 시 NaN (Not A Number) 반환
console.log(str / b);