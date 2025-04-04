// let obj = {
//     num: 10,
//     printNum: function() {
//       console.log(this.num);
//     }
//   };
  
//   obj.printNum();   // 객체 속성 함수안에서의 this는 기본적으로 해당 객체를 가리킨다.


// function showComment() {
//     console.log(this);
//   }
  

//   function Developer() {
//     console.log(this);
//   }
//   var dev = new Developer();

//   console.log(dev);


function fetchData() {
    axios.get('domain.com/products').then(function() {
      console.log(this);
    });
  }
  
  // 웹 개발 할때 가장 많이 보게 되는 this 이다. 데이터를 받아올때 사용하는 HTTP 요청 비동기 처리 코드
  // 비동기 처리 코드의 콜백함수는 전역 컨텍스트를 가르킨다. 
  fetchData();
