// 문자열 내 특정 문자 제거하기
function solution(my_string, letter) {
    var answer = "";

    // string 도 배열처럼 인덱스 접근과 길이 체크 가능
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] !== letter) {
            answer += my_string[i];
        }
    }

    // String.replace(찾을 문자, 변환할 문자)
    // → 일치하는 첫 번째 값만 치환 후 종료

    // String.replaceAll(찾을 문자, 변환할 문자)
    // → 문자열 전체에서 일치하는 모든 값을 치환

    return answer;
}
