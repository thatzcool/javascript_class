function Person(name) {
    this.name = name;
}

Person.prototype.printName = function(){ 
    console.log(this.name);
}

let ironMan = new Person("Tony Stark");
console.log(ironMan.__proto__.printName());
ironMan.printName();


