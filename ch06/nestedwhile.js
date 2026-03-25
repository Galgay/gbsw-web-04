// 2중 while 문을 사용해 2단 ~ 9단 구구단을 출력하세요.
let dan = 2;
let num = 1;

while (dan <= 9) {
    num = 1;
    console.log(`${dan}단`);
    while (num <= 9) {
        console.log(`${dan} x ${num} = ${dan * num}`);
        num++;
    }
    dan++;
    console.log(`\n`);
}

// label을 사용해 원하는 지점에 break/continue 호출 가능
gugudan: while (dan <= 9) {
    num = 1;
    console.log(`${dan}단`);
    while (num <= 9) {
        if (dan == 6) {
            break gugudan;
        }
        console.log(`${dan} x ${num} = ${dan * num}`);
        num++;
    }
    dan++;
    console.log(`\n`);
}
