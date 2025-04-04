// currying pattern 
// 함수의 내부 로직은 변경하지 않은 상태로 여러개의 함수를 조합하여
// 결과값을 도출하는 프로그래밍 패턴

function add(num1, num2) {
    return num1 + num2;
  }
  
  function curry(fn, a) {
    return function(b) {
      return fn(a, b);
    };
  }
  
  var add3 = curry(add, 3);
  add3(4); // 7
  