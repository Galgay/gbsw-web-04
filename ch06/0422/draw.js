// draw(n) 함수를 작성하시오.
function draw(number) {
    // 반복문을 중첩해서 사용할 것
    for (let i = 1; i <= number; i++) {
        // i는 i번째 줄을 담당한다.
        let str = "";
        for (let j = 1; j <= i; j++) {
            // i번째 줄의 별의 개수를 담당한다.
            str += "*";
            // console.log("*" * j); // js에서는 문자열에 곱셉 사용 불가
        }
        console.log(str);
    }
}

draw(5);
// *
// **
// ***
// ****
// *****
