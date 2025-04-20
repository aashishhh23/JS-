// console.log('Namaste');

// let lastName ='  Verma  ';


// let firstName = new String('Aashish');

// let message=`This is
//   my first
//   Message`;

// console.log(message);

// let words = message.split(' ');

// console.log(words);

// let date =new Date();

// let Date2 = new Date('June 14 2002 11:34');

// let date3= new Date('June 20 1998 07:15');

// date3.setFullYear('1947');

// console.log(Date3);

// let numbers = [1,4,5,7];
// console.log(numbers);

// numbers.push(9)

// END -> PUSH
// BEGINNING -> UNSHIFT

//MIDDLE -> SPLICE

    //    SEARCHING

//     console.log(numbers);

//     console.log(numbers.indexOf(9));

//     //WANT TO CHECK NUMBERS EXIST IN A ARRAY

//     if(numbers.indexOf(4)!=-1)
//         console.log("present");

//     console.log(numbers.includes(7));

//    console.log(numbers).indexOf(4, 2);
// let courses = [
//     {no:1, naam:'Love'},
//     {no:2, naam:'Rahul'}
// ];

// console.log(courses);

// console.log(courses.indexOf ({no:1, naam:'Love'}));

// let course= courses.find(function(course) {
//  return course.naam =='Love';
// })
// console.log(course);

// let course = courses.find(course => 
//     course.name =='Love');

// function(course) {
//     return course.naam === 'Love';

// }


// console.log(course);

//let numbers = [1,2,3,4,5,6,7];

// END SE REMOVE
// numbers.pop();

//BEGIN SE REMOVE
// numbers.shift();

// MIDDLE SE REMOVE
// numbers.splice(2, 1);
// console.log(numbers);

// let numbers = [1,2,3,4,5];
// let numbers2= numbers;

// // numbers = [];

// // numbers.length =0;

// numbers.splice(0,numbers.length);

// console.log(numbers);
// console.log(numbers2);


// FOR COMBINED TWO NUMBERS

// let first = [1,2,3];
// let second =[4,5,6];

// let combined = first.concat(second);
//  console.log(combined);

//  let marks=[10,20,30,40,50,60,70,80];
//  let sliced =marks.slice();
// // let sliced =marks.slice(2,6);
// console.log(sliced);

// SPREAD OPERATOR FOR COMBINING

// let first = [1,2,3];
// let second=[4,5,6];

// let combined =[...first, ...second];
// console.log(combined);

// // Copy Create kaise KRu
// let another =[...combined];

// ITERATING[Travel] An ARRAY :- For loop sirf lgta h iteratbale ke upr

// let arr =[10,20,30,40,50];


// for(let value of arr){
//     console.log(value);
// }

// arr.forEach((number)=>   console.log(number));


// Joining Arrays

// let numbers=[10,20,30,40,50];
// const joined = numbers.join('.');

// console.log(joined);

// Split Array : Array Create kr deta hai!!

// let message ='This is my first message';
// let parts= message.split(' ');

// console.log(parts);

// let joined= parts.join('_');
// console.log(joined);

// Sorting : Increase/decrease

// let numbers =[40,30,10,20,50];

// numbers.sort();

// console.log(numbers);

// numbers.reverse()
// console.log(numbers);

//FILTERING ARRAYS:-> 

// let numbers = [1,2,-1,-4];

// let filtered = numbers.filter(function(value){
//     return value >= 0;
// }) ;
// console.log(filtered);

// CONVERT INTO ARROW FUNCTION
// 1. Function Hatao Arrow Lgao
// 2. Agar single input parameter hai to  bracket htao
// 3.Agar Single line ki functionn body hai to brackets and(Return) htao
// 4. Single Line ke andr pure ke pure code ko le aao

// let numbers = [1,2,-1,-4];

// let filtered = numbers.filter(value =>     value >= 0);

// console.log(filtered);


// MappING

// let numbers =[7,8,9,10];
// console.log(numbers);

// let items=numbers.map(value => 'student_no' +value)  ;



// console.log(items);

// Mapping With Objects

// let numbers = [1,2,-6,-9];
// let filtered = numbers.filter(value => value => 0);

// let items = filtered.map(num =>{ value:num});

// console.log (items);

// CHAINING

let numbers = [1,2,-6,-9];

let items = numbers
        .filter(value => value >= 0)

           .map(num =>{ value:num});

console.log (items);
