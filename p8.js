//promise-1
let promise = new Promise((resolve, reject)=>{
  resolve();
});
promise.then(()=>{
  console.log('work is finish');
});
promise.catch(()=>{
  console.log('ohoh');
});
//promis-2
let promise2 = new Promise((resolve, reject)=>{
  resolve();
});
promise2
.then(()=>console.log('Work is finish'))
.then(()=>console.log('Again finish'));

//promise-3
let promise3 = new Promise((resolve, reject)=>{
  reject();
});
promise3
.then(()=>console.log('work is finish!!'))
.then(()=>console.log('again finshed!'))
.catch(()=>console.log('uh uh!'));