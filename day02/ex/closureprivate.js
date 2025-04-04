var fund = (function() {
    var money = 0;
    return {
      deposit: function(amount) {
        money += amount;
      },
      withdraw: function(amount) {
        money -= amount;
      },
      getMoney: function() {
        return money;
      }
    }
  }());
  
  fund.deposit(100); // 100
  fund.deposit(100); // 200
  fund.getMoney();   // 200
  fund.money = 100000; // private 변수로 변경되지 않는다. 
  fund.getMoney();   // 200
  console.log(fund.getMoney());
  