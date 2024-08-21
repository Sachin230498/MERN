
let btn  =document.querySelector("button")


let input = document.querySelector("input")
// console.log(input)

let data_arr = JSON.parse(localStorage.getItem("data")) || [];

btn.addEventListener("click", saveData)

function saveData(){
    let data = input.value
    data_arr.push(data)
    // console.log(data_arr)
   localStorage.setItem("data", JSON.stringify(data_arr) )
}