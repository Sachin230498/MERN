// prototype inheritence


// make object of 4 animal like tiger lion cat 

let cat = {
    type : "cat",
    legs:4,
    tail:true,
}

// console.log(cat)

// let loin = {
//   type: cat,
//   legs: 4,
//   tail: true,
//   speed:60
// };


// let tiger = {
//   type: cat,
//   legs: 4,
//   tail: true,
//   speed: 80,
// };



// Object.create


let tiger = Object.create(cat)

tiger.speed = 60

//  console.log("tiger object", tiger)

// console.log(tiger.type)


let lion = Object.create(cat);

lion.speed = 80

console.log(lion)


// object.create() store the parent properties in [[prototype]] Object




