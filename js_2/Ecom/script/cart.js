let cart = document.getElementById("cart")

let cart_data = JSON.parse(localStorage.getItem("cart_data"))
display(cart_data)
console.log(cart_data)



function display(data) {
  cart.innerHTML = "";
  data.forEach(function (el, index) {
    //   console.log(el)

    let div = document.createElement("div");

    let name = document.createElement("h1");
    name.innerText = el.first_name + " " + el.last_name;

    let img = document.createElement("img");
    img.src = el.Avatar;

    let email = document.createElement("p");
    email.innerText = el.email;

    let del = document.createElement("button");
    del.innerText = "Remove";
    del.addEventListener("click", function () {
      Removeitem(index);
    });

    div.append(img, name, email, del);

    cart.appendChild(div);
  });
}


function Removeitem(index){
 let arr =    cart_data.splice(index,1)
  //  console.log(arr)
    localStorage.setItem("cart_data", JSON.stringify(cart_data))
    display(cart_data);
}

// Shreya do mint rukna call chal rha hai ek