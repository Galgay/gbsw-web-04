const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("점수를 입력하세요. : ", function (score) {
    // 점수는 0~100점 사이 범위
    // 90점 이상이면 장학대상
    // 60점 이상이면 합격
    // 60점 미만이면 불합격
    if (score >= 90 && score <= 100) {
        console.log("장학대상입니다.");
    } else if (score >= 60 && score < 90) {
        console.log("합격입니다.");
    } else if (score < 60 && score >= 0) {
        console.log("불합격입니다.");
    } else {
        console.log("유효하지 않은 값입니다.");
    }
    rl.close();
});
