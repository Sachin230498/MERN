let main = document.getElementById("main")
let cart_arr = JSON.parse(localStorage.getItem("cart_data")) || [];
let product_data = JSON.parse(localStorage.getItem("data"))
display(product_data)
// console.log(product_data)


function display(data){
     data.forEach(function(el,index){
      //   console.log(el)

        let div = document.createElement("div")

        let name = document.createElement("h1")
        name.innerText = el.first_name +  " " + el.last_name

        let img = document.createElement("img")
        img.src = el.Avatar

        let email = document.createElement("p")
        email.innerText = el.email;

        let cart = document.createElement("button")
        cart.innerText = "Add to cart"
        cart.addEventListener("click", function(){
         addcart(el)
        })


        div.append(img,name,email,cart)

        main.appendChild(div)


     });
}

let flag = false

function addcart(data){
//   console.log(data)
// console.log(cart_arr)

cart_arr.map(function(el){
   if(el.id == data.id){
    flag = true
   }else{
      flag = false
   }
})


if(flag){
   alert("product is already added")
}
else{
   cart_arr.push(data)
   alert("product is added")
   localStorage.setItem("cart_data", JSON.stringify(cart_arr));

}


}