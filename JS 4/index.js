// Function Declaration
// Hoisting:-[Process of moving function declaration to thr top of file.../ Done automatically by JS Engoine] sirf function declaration ko shift krta hai !! islea run(function call) ko hum upr v likh skte h !!

// function run () {
//     console.log('running');
// }
// // function call (invoke)
// run();

// // Named Function Assignment
// let stand = function walk() {
//     console.log('walking');
// };

// // Anonymous Function Assignment
// let stand2= function () {
//     console.log('walking');
// };

// stand();

// let jump = stand;

// jump();

// stand2();

// // 

// let x =1;
// x='a';

// console.log(x);

// function sum(a,b){
//     let total = 0;
//     for(let value of arguments)
//         total = total +value;
 
//     return total;
// };

// // console.log(sum(1,2));
// // console.log(sum(1));
// // console.log(sum());
// // console.log(sum(1,2,3,4,5));

// let ans = sum(1,2,3,4,5,6);
// console.log(ans);

// Rest Operator

// function sum(num, value,...args) {
//     console.log(args);
// }
// sum(1,2,3,4,5,6);

// DEFAULT PARAMETER

function interest (p,r=6,y=9) {
    return p*r*y/100;
}

// GETTER SETTER

// Getter-> access Properties
// Setter -> Change or mutate properties

// console.log(interest (1000, undefined, 8));

// let  person= {
//     fName:'Aashish',
//     lName: 'Verma',

//     get fullName() {
//         return `${person.fName} ${person.lName}`;
// },

// set fullName (value) {
//     if(typeof value !==String) {
//         throw new Error("You have not send a string")
//     }
//     let parts = value.split(' ');
//     this.fName = parts [0];
//     this.lName = parts[1];

// }

// };

// try{
//     person.fullName = true;

// }
// catch(e){
//     alert('e')
// }
// person.fullName = true;

// console.log(person.fullName);

// console.log(person);



// issue -> Read Only

// console.log(fullName);

// SCOPE

// {
//     var a=5;

// }
// console.log(a);

// Let keyword ke andr jo variable ka scope hota h uska scope uske nearest codeblocks ke beech m hota h


// Var -> keywords -> scope jis function ke andr wo defined hai agr wo function ke andr defined nhi h to puri file ke andr uska scope hoga !!
// function walk() {
//     var a =5;
// }
// console.log(a);

// for (var i =0; i<10; i++) {

// }
// console.log(i);

// if (true) {
//     var a=5;

// }
// console.log(a);

// function a() {
//     const a = 5;
// }

// function b() {
//     const b = 5;
// }

// SORTING

// let a = [10,5,4,25];
// a.sort(function(a,b) {
//     return a-b;
// }
// );

// console.log(a);

let arr =[ 1,2,3,4];
let total = 0;

for(let value of arr)
    total= total + value;

console.log(total);

arr.reduce((accumulator, currentvalue) => accumulator + currentvalue);

console.log(totalSum);