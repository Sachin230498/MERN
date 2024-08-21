// let container = document.getElementById("container");
// let play = document.getElementById("play")
// let pause = document.getElementById("stop")
// let data_arr = JSON.parse(localStorage.getItem("data")) || [];
// let id; //declare
// // console.log(data_arr)

// display(data_arr);

// function display(data) {
//   let index = 0;

//   id = setInterval(function () {
//     container.innerHTML = "";

//     let img = document.createElement("img");
//     img.src = data_arr[index];
//     index++;

//     if (index == data.length) {
//       index = 0;
//     }

//     container.append(img);
//   }, 2000);
// }



// pause.addEventListener("click", pausefun)




// //clearinterval(id)

// function pausefun(){
//   // console.log("hello")
//   clearInterval(id)
// }


// play.addEventListener("click", playfun);

// function playfun() {
//   display(data_arr);
// }


let a = new Date()
console.log(a)


let b = a.getHours()
console.log(b)

let c = a.getMinutes();
console.log(c);