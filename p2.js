//callback
function greet(callback){
  console.log('hello');
  var data={
    name:'DTD'
  };
  callback(data);
}
greet(data=>{
  console.log('haha');
  console.log(data);
});