// var는 함수 스코프
function functionScope() {
    if (true) {
        var b = 5;
    }
    // var는 함수 스코프로, 해당 함수 내에서 어디서든 참조가 가능하다.
    console.log(b); // 변수 참조 가능
}

function blockScope() {
    if (true) {
        let c = 5;
        const d = 5;
    }

    // let은 가변, const는 불변
    // let const는 블록 스코프를 가지므로 해당 블록 외에서는 참조가 불가능하다
    console.log(c); // 변수 참조 불가능
}
