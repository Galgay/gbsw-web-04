const name = "서정민";
const age = 27;

// 작은 따옴표/큰 따옴표를 이용해 문자열에 변수를 포함하게 되면 가독성이 떨어지고 쓰기 불편하다.
const quotes =
    "안녕하세요 제 이름은 " + name + ", 나이는 " + age + "세 입니다.";

// ES6 > 템플릿 문자열 방식 (백틱)
const tmpStr = `안녕하세요 제 이름은 ${name}, 나이는 ${age}세 입니다.`;
console.log(quotes);
console.log(tmpStr);
