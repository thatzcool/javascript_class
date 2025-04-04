function fetchData(data) {
    var receivedData;
    if (data === undefined) {
      receivedData = localStorage.getItem('item');
    }
  }
  
  fetchData(20);   //아규먼트 20 

  function fetchData(data) {
    var receivedData;
    receivedData = data || localStorage.getItem('item');
  }
  
  if (data !== undefined) {
    num = 50;
    if (num > 10) {
      num = 100;
    } else {
      num = 0;
    }
  }

  if (data !== undefined) {
    num = 50;
    num = num > 10 ? 100 : 0;
  }
  
  