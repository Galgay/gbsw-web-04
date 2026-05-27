// ES6 > 화살표 함수

// 선언식
function plus(a, b) {
    return a + b;
}

// 표현식
let plus = function (a, b) {
    return a + b;
};

// function 키워드를 생략하고 화살표 사용
plus = (a, b) => {
    return a + b;
};

// 중괄호를 생략하고 바로 리턴되도록 단축
plus = (a, b) => a + b;

// 화살표 함수의 매개변수가 하나인 경우 괄호 생략 가능
const plus1 = (a) => a + 1;

// 화살표 함수의 매개변수가 없는 경우 빈 괄호 사용
const empty = () => null;
