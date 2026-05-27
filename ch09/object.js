// new 키워드 사용하는 것이 정석방법
// const obj = new Object()
// 객체 내 값은 프로퍼티, 함수는 메서드라고 부릅니다.
const obj = {
    name: "서정민",
    age: 27,
    // 객체 내 메서드 선언
    sayHello: function (msg) {
        console.log("안녕하세요. " + msg);
    },
};

obj.sayHello("테스트입니다."); // 객체 내 메서드 호출
obj.name = "서정민2"; // 속성 값 수정 가능

// 첫 선언 떄 없던 속성인 경우, 동적으로 추가된다.
obj.gender = "male";
// delete 키워드를 사용해 속성을 지정해 삭제할 수 있다.
delete obj.gender;

// 대괄호 혹은 . 이용하여 프로퍼티 참조 가능
// obj["name"];
// obj.name

let id = "1234";
let pw = "5678";

// 키값을 생략하는 경우, 변수명을 키로 사용
const obj2 = {
    id,
    pw,
};

console.log(obj2);
