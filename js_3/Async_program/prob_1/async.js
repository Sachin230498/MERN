// asynchronous

//settimeout(function, time(ms))
//setinterval(function, time(ms))
//clearinterval(id);

console.log("hello -1")

function add(){
  
   // alert("Welcome to our website")
   console.log("hello")
}

// add()


// console.log("hello-2")

// // setTimeout(add, 3000)


// //setinterval

// setInterval(add, 2000);


// localstorage
//it only store string

// localstorage.setitem("key", value)
// localstorage.getitem(key)
//localstorage.removeitem(key)
//localstorage.clearitem()


let a = "abc"
let num = 123
let arr = [ 1,2,3,4]
console.log(arr)
// console.log( typeof num)

localStorage.setItem("data", a)
localStorage.setItem("num", JSON.stringify(num))
localStorage.setItem("arr",JSON.stringify( arr))

let b = localStorage.getItem("data")
let c = JSON.parse( localStorage.getItem("num"))
let d = JSON.parse( localStorage.getItem("arr"))
console.log(d)
// console.log(typeof c, c)
// console.log(b)

// localStorage.removeItem("data")



