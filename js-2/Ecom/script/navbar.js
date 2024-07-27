let nav = document.getElementById("nav")

// console.log(nav)

let login_data = JSON.parse(localStorage.getItem("login_data"));


if(login_data != null){
   nav.innerHTML = null

   let name = document.createElement("h2")
   name.innerText = login_data.name


   let logbtn = document.createElement("button")
   logbtn.addEventListener("click", function(){
     localStorage.removeItem("login_data")
    window.location.href = "../html/login.html";
   })
   logbtn.innerText = "Logout"

   nav.append(name, logbtn)
}


// setitem


