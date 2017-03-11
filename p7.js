//JSON
var personobj={
  firstname:"amy",
  fullname:"",
  age:20,
  married:true,
  hasOwnhair:null,
  children:[{
    firstname:"john"
  },{
    firstname:"kevin"
  }]
};

var personjson=JSON.stringify(personobj);
console.log(personobj);
console.log(personjson);

var personjava=JSON.parse(personjson);
console.log(personobj);
console.log(personjson);
console.log(personjava);