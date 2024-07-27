let main = document.getElementById("main")

let product_data = JSON.parse(localStorage.getItem("data"))
display(product_data)
// console.log(product_data)


function display(data){
     data.forEach(function(el,index){
        console.log(el)

        let div = document.createElement("div")

        let name = document.createElement("h1")
        name.innerText = el.first_name +  " " + el.last_name

        let img = document.createElement("img")
        img.src = el.Avatar

        let email = document.createElement("p")
        email.innerText = el.email;

        let cart = document.createElement("button")
        cart.innerText = "Add to cart"


        div.append(img,name,email,cart)

        main.appendChild(div)


     });
}