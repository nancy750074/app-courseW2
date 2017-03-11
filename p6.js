'use strict'
//class
class Person{
  constructor(name){
    this.name=name;
  }
  printGreeting(){
    console.log(`Hi,i am ${this.name}!`)
  }
}

var person1=new Person('amy');
person1.printGreeting();

var person2=new Person('boy');
person2.printGreeting();

//extends
class Employee extends Person{
  constructor(name,job){
    super(name);
    this.job=job
  }
  printGreeting(){
    super.printGreeting();
    console.log(`hi,i am ${this.name}and i am a ${this.job}`);
  }
}

var person3=new Employee('milk','doctor');
person3.printGreeting();

var person4=new Person('cc');
person4.printGreeting();

//prototype
Person.prototype.printGreeting=function(){
  console.log( `hi,i am ${this.name},and i have an apple.`);
}
person3.printGreeting();
person4.printGreeting();