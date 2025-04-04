// 함수
function sumNumbers(a, b) {
    return a + b;
  }
  
  function sumNumbers(a, b) {
    console.log(a + b);
  }
  
  sumNumbers(10, 20);   // 함수 실행 

  // 함수 표현식  
var sumNumbers = function(a, b) {
    return a + b;
  };
  
  // 함수 선언문
  function sumNumbers(a, b) {
    return a + b;
  }
  
  // 잘 설계된 함수
function sumNumbers(a, b) {
    return a + b;
  }
  

  // 단일 책임 원칙에 벗어나는 함수
function sumNumbers(a, b) {
    var num = 1000;
    var data = {};
  
    $.get('domain.com/products/1').then(function(response) {
      data = response.data;
    });
  
    var total = a + b + num;
    return total;
  }
  
  // 함수 리팩토링
function sumNumbers(a, b) {
    return a + b;
  }
  
  function sumAll() {
    var num = 1000;
    var total = sumNumbers(0, 0) + num;
    return total;
  }
  
  function fetchData() {
    var data = {};
    $.get('domain.com/products/1').then(function(response) {
      data = response.data;
      return data;
    });
  }
  