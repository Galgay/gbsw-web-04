// 2중 for 문을 사용해 2단 ~ 9단 구구단을 출력하세요.
for (let dan = 2; dan <= 9; dan++) {
    console.log(`${dan}단`);
    for (let num = 1; num <= 9; num++) {
        console.log(`${dan} * ${num} = ${dan * num}`);
    }
    console.log(`\n`);
}

// 내부 반복문이 종료되어야 외부 반복문의 다음 루프가 실행된다.
// for (i = 0; i < 3; i++) {
//     console.log(`i는 ${i}입니다.`);
//     for (j = 0; j < 3; j++) {
//         console.log(`   j는 ${j}입니다.`);
//     }
//     console.log(`\n`);
// }
// i == 0일 떄 j 반복문 3회 실행
// i == 1일 떄 j 반복문 3회 실행
// i == 2일 떄 j 반복문 3회 실행
