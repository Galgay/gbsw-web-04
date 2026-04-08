// 배열 내 원소들의 총합 구해서 출력하기
// 함수 정의 및 호출
// function 함수명(인자1, 인자2) {
//     // 함수 내용
//     // return - 값을 반환하는 동시에 함수를 현재 지점 종료
// }

function times(num) {
    return num * 2;
}

// 변수에 함수 반환값을 할당 가능하다.
let result = times(3);
console.log(result);

const arr = [1, 4, 2, 8, 11, 5];
let sum = 0;

// push는 배열의 제일 끝에 원소를 추가한다.
arr.push(15);

// 배열 마지막 원소의 인덱스는 항상 배열의 길이 - 1
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    // sum = sum + arr[i]
}

console.log(sum);
