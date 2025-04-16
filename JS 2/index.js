console.log('Letssssssss   goooo');

//object create

// let rectangle = {
//     length: 1,
//     breadth:2,

//     draw: function(){
//         console.log('drawing rectangle')
//     }
// };



  // factory function

//   function createRectangle(len, bre) {

//     return rectangle = {
//         length: len,
//         breadth:bre,
    
//         draw(){
//             console.log('drawing rectangle');
//         }
//     };
//   }


// let rectangleObj1 = createRectangle(5, 4);

// let rectangle2 = createRectangle(2, 4);

// let rectangle3 = createRectangle(3, 4);

  // To Access

//   rectangle.length
//   rectangle.width 
    
  //     CONSTRUCTOR FUNCTION-> Pascal Notation -> First Letter Of every Word Is Capital

  // It initalises/ Define Property/ Methods

function Rectangle() {
    this.length = 1;
    this.breadth =2;
    this.draw = function() {
        console.log('drawing');

    }
}



  //object creation using constructor function
  let rectangleObject = new Rectangle (4,6);

//   rectangleObject.color = 'yellow';
//   delete rectangleObject.color;
//   console.log(rectangleObject);

  let Rectangle1 = new Function(
    'length', 'breadth',
    `this.length= length;
    this.breadth = breadth;
    this.draw= function() {
    console.log('drawing');
    }`


  );

  // Object Creation Using Rectangle 1
  let rect = new Rectangle1(2,3);
  rect.length;
  console.log(rect);

// let rectangle1 = {
//     length: 1,
//     breadth:2,

//     draw: function(){
//         console.log('drawing rectangle')
//     }
// };

// let rectangle2 = {
//     length: 1,
//     breadth:2,

//     draw: function(){
//         console.log('drawing rectangle')
//     }
// };


// let a=10;
// let b=a;

// a++:
// console.log(a);
// console.log(b);

// let a = {value: 10};
// let b = a;

// a.value++;

// console.log(a.value);
// console.log(b.value);

// let a = 10;

// function inc(a) {
//   a++;

// }

// inc(a);

// console.log(a);

// let a = {value:10};

// function inc (a){
//   a.value++;

// }

// inc(a);

// console.log(a.value);

let rectangle= {
  length:2,
  breadth:4,
};
//for-in loop

// for(let key in rectangle) {
//   // keys are reflected through key variables
//   // keys are reflected through rectangle[key]
// console.log(key, rectangle[key]);
// }

// for-of loop
// for(let key of Object.entries(rectangle)) {
//   console.log(key);
// // }

// if('color' in rectangle) {
//   console.log('present');
// }
// else{
//   console.log('Absent')
// }

// let src = {
//   a:10,
//   b:20,
//   c:30
// };
// let dest = {};
// for(let key in src) {
//   dest[key] = src[key];
// }

// console.log(dest);

// src.a++;
// console.log(dest);

//   OBJECT CLONING #2

// let src = {
//   a:10,
//   b:20,
//   c:30
// };

// let src2 = {value:25};

// let dest = Object.assign({}, src);

// console.log(dest);

// src.a++; 

// console.log(dest);


// OBJECT CLONING #3

let src= {
  a:10,
  b:20,
  c:30
};

let dest= {....src};

console.log(dest);

src.a++;

console.log(dest);