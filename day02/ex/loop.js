// for(let i = 0 ; i < 10 ; i++){
//     console.log(i);   //0~9까지 출력
// }

// var arr = [10, 20, 30];
// arr.forEach(function(value, index) {
//   console.log('array index: ' + index + ' value : ' + value);
// });


// var arr = [10, 20, 30];
// var obj = {
//   num: 10,
//   str: 'hi',
//   arr: [],
// };

// // 배열의 인덱스를 1개씩 접근하여 순차적으로 순회하는 경우
// for (var key in arr) {
//     console.log(arr[key]);
//   }
  
//   // 객체의 키를 1개씩 접근하여 순차적으로 순회하는 경우
//   for (var key in obj) {
//     console.log(obj[key]);
//   }
  
  var obj = {
    num: 10,
    str: 'hi',
    arr: [],
}

// for (var prop of obj1) {
//     console.log(prop, obj[prop]); 
// }

for (let prop of Object.keys(obj)) {
    var value = obj[prop];
    console.log(prop, value);
}

for(let prop of Object.keys(obj)) {
    console.log(prop, obj[prop])
}