function solution(arr, delete_list) {
    var answer = [];
    for (let i = 0; i < arr.length; i++) {
        console.log(`${arr[i]}`);
        let flag = true;
        for (let j = 0; j < delete_list.length; j++) {
            if (arr[i] === delete_list[j]) {
                console.log(`${i} delete`);
                flag = false;
            }
        }
        if (flag) {
            console.log(`${i} save`);
            answer.push(arr[i]);
        }
    }
    return answer;
}

console.log(solution([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12]));
