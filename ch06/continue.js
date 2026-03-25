// 1 ~ 10 내의 홀수만 출력하겠다.
// continue는 현재 루프를 건너뛴다.
let i = 0;
while (i < 10) {
    i++;

    // i가 짝수일때 continue;
    if (i % 2 === 0) {
        continue;
    }

    console.log(i);
}
