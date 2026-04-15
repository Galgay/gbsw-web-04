// 배열 내 짝수와 홀수 개수 구해 [짝수 개수, 홀수 개수] 배열로 반환하기
function solution(num_list) {
    let a = 0; // 짝수의 개수

    // 요구사항 - num_list 안의 홀수와 짝수 개수를 배열로 반환
    // 필요 작업 - 홀수와 짝수 개수를 알아내야 한다.
    // 구현 방법 - num_list 배열을 순회하며 홀수와 짝수를 카운트한다.
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            a++; // 짝수인 경우
        }
    }
    return [a, num_list.length - a];
}
