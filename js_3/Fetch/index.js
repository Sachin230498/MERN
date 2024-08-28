// Fetch tha data via api
// api => data
let main = document.getElementById("main");

let api = "https://jsonplaceholder.typicode.com/posts";

getData()

function getData(){
let a = fetch(api)
a.then(function(res){
//    console.log(res)
// 1st request
let b = res.json()
// 2nd request
// console.log(data)
b.then(function(data){
    console.log(data)
    display(data);
})
})
}



function display(arr){
   arr.forEach(function(el){
   console.log(el)

   let div = document.createElement("div")

     let userID = document.createElement("h3")
     userID.innerText = el.id
       

     let title = document.createElement("h1")
     title.innerText = el.title

     div.append(userID,title)

     main.append(div)



   })
}

// fetch(api)

//  console.log(a)