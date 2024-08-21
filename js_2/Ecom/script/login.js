let signup_data = JSON.parse(localStorage.getItem("signup_data"));
// console.log(signup_data)

let form = document.querySelector("form");

form.addEventListener("submit", getData);

function getData(e) {
  e.preventDefault();


  let email = form.email.value;
  let pass = form.pass.value;

  let data = {
    email,
    pass,
  };

  // console.log(data)


  let flag = false;

signup_data.forEach(function(el){
  // console.log(el.email)
  if(el.email == data.email) {

    if(el.pass == data.pass ){
         flag = true;
         localStorage.setItem("login_data",JSON.stringify(el))
    }
    
  }
})



if(flag == true) {
  alert("Login success")
     window.location.href = "../html/index.html";
  //  console.log("Login succesfully")
}else{
  // console.log("Login failed")
  alert("Login failed")
}

  
   
 
  

  // console.log(signup_arr)
}



// Map Foreach

// let arr = [2,4,8,1,3]
// // for(let i = 0; i < arr.length; i++) {
// //   console.log(i)
// // }

// let a =  arr.map(function(el,index,array){
//     //  console.log(el)
//     return el*2
// })

// let b = arr.forEach(function (el, index, array) {
//   // console.log(el*2);
//   return el*2
// });

// console.log(a)
// console.log(b)









