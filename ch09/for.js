const arr = ["고양이", "사자", "이랑"];
const obj = { name: "서정민", age: 27 };

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// of 키워드 사용해 배열 순회 가능
for (let animal of arr) {
    console.log(animal);
}

// in 키워드 사용해 객체 순회 가능
for (let key in obj) {
    console.log(key);
    console.log(obj[key]);
}
