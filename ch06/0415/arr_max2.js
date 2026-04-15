// 배열 내 원소 중 두 개를 곱해 만들 수 있는 최댓값을 구해라.
// 1. 배열 내 가장 큰 원소와, 그 다음으로 큰 원소 2개를 구하면 해결할 수 있는 문제
function solution(numbers) {
    var answer = 0;

    // 이 식에서 만약 양수 -> b를 a보다 앞에 위치시킨다.
    // 이 식에서 만약 0 -> 아무것도 안한다.
    // 이 식에서 만약 음수 -> a를 b보다 앞에 위치시킨다.
    numbers.sort((a, b) => b - a);
    return numbers[0] * numbers[1];
}
