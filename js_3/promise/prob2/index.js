let pass = document.getElementById("input");
let img = document.getElementById("img");
let btn = document.getElementById("btn");
let password = 1234;

btn.addEventListener("click",function(){
    setTimeout(getData, 2000)
} );

// console.log(pass,img)



 function getData(){
let promise = new Promise(function(res,rej){
        if(pass.value == password){
             res("data get");
            
        }
        else{
            rej("rejected")
        }
    })
//  console.log(promise)
    promise.then(function(res){
        // console.log(res, "resolve")
        img.src = "../../assets/thumbs-up-13198_256.gif";
    }).catch(function(err){
        // console.log(err, "error")
       img.src =
         "https://cdn.pixabay.com/animation/2023/10/16/00/18/00-18-10-985_512.gif";
    })

    }

// let abc = new Promise(function(res,rej){
//     if(5==4){
//         res()
//     }else{
//         rej()
//     }
// })


// console.log(abc)
