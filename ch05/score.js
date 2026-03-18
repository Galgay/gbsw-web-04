const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("점수를 입력하세요. : ", function (score) {
    // 100 ~ 91 점 - A학점
    // 81 ~ 90 점 - B학점
    // 71 ~ 80 점 - C학점
    // 61 ~ 70 점 - D학점
    // 0 ~ 60점 - F학점
    // 그 외 - 범위를 벗어났습니다

    if (score > 100 || score < 0) {
        console.log("범위를 벗어났습니다.");
    } else if (score >= 91) {
        console.log("A학점");
    } else if (score >= 81) {
        console.log("B학점");
    } else if (score >= 71) {
        console.log("C학점");
    } else if (score >= 61) {
        console.log("D학점");
    } else {
        console.log("F학점");
    }
    rl.close();
});
