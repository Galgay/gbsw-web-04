const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("단 수를 입력하세요. : ", function (dan) {
    // $dan 의 구구단 출력
    // $dan * 1 ~ $dan * 9까지 출력
    for (let i = 1; i <= 9; i++) {
        console.log(`${dan} x ${i} = ${dan * i}`);
    }
    rl.close();
});
