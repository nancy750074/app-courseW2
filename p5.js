//bind-1
var person={
  firstname:'wan',
  lastname:'ting',
  getfullname:function(){
    var fullname=this.firstname+''+this.lastname;
    return fullname;
  }
}
var logName=function(){
  console.log('logged:'+this.getfullname());
}
var logPersonname=logName.bind(person);
logPersonname();

//bind-2
let greeting=function(fn){
  fn();
};
let person2={
  name:'wanting',
  hello:function(){
    console.log( `Hello${this.name}`);
  },
  sayHello:function(){
    greeting(this.hello.bind(this));
  }
};
person2.sayHello();

//bind-3
let person3={
  name:'wanting',
  sayHello:function(){
    greeting(
      ()=>console.log(`Hello${this.name}`)
      );
  }
};
person3.sayHello();