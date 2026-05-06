// 1부터 n까지 반복하면서,
// 짝수는 더하고, 홀수는 빼는 함수 calc(n)을 작성하시오.
// 최종 결과값을 반환하시오.
function calc(number) {
    let sum = 0;

    // 1부터 n까지 반복
    for (let i = 1; i <= number; i++) {
        if (i % 2 == 0) {
            // 짝수는 더한다
            sum += i;
        } else {
            // 홀수는 뺀다
            sum -= i;
        }
    }

    return sum;
}

console.log(calc(6));
// -1 + 2 - 3 + 4 - 5 + 6
// 3
