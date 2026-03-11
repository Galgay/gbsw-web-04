let a = 1;
let result = ++a; // 전위연산의 경우, 먼저 + 1 처리한다.

console.log(a); // 2
console.log(result); // 2

a = 1;
result = a++; // 후위연산의 경우, 우선순위가 낮아 마지막에 + 1 처리된다.

console.log(a); // 2
console.log(result); // 1

a = 2;
console.log(a++); // 2

a = 2;
console.log(++a); // 3