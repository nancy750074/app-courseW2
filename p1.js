//push
let a=['0','1'];
console.log(a);
a.push('2');
console.log(a);

//slice
let b=['0','1','2','3'];
console.log(b);
let sliced=b.slice(1,3);
console.log(sliced);

//forEach
var colors=['red','blue','yellow'];
//forEach-for
for(var i=0;i<colors.length;i++){
  console.log(colors[i]);
}
//forEach-forEach
colors.forEach(
  (c)=>console.log(c)
);

//map-1
//map-1-for
var numbers=[1,2,3];
var doublenumbers;
doublenumbers=[];
for(var i=0;i < numbers.length;i++){
  doublenumbers.push(numbers[i]*2);
}
console.log(doublenumbers);
//map-1-map
var doublenumber;
doublenumber=[];
doublenumber=numbers.map(
  (number)=>number*2
);
console.log(doublenumber);

//map-2
var car=[
  {model:'Buick',price:'cheap'},
  {model:'BMW',price:'expensive'}
];
var prices=car.map((car)=>car.price);
console.log(prices);

//spread operator-1
let array1=[1,2,3];
let array2=[4,5,6];
let array3=[...array1,...array2];
console.log(array3);

//spread operator-2
function adder (base,...numbers){
    numbers.forEach(function (number) {
        console.log(base + number);
    });
}
adder(3,5,7,1);