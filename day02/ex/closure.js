function addCounter() {
    var counter = 0;
  
    return function() {
      return counter++;
    };
  }
  
  var add = addCounter();
  console.log(add()); // 0
  console.log(add())// 1
  console.log(add()) // 2
  
//   addCounter()함수가 반환한 함수를 add라는 변수에 담아놓고
//   add 변수 자체가 함수처럼 작동하는 것이다. 

//   add 변수가 addCounter()가 반환한 함수를 참조하고 있다.