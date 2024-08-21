

let container = document.getElementById("container");
let data_arr = JSON.parse(localStorage.getItem("data")) || [];
display(data_arr)

// console.log(container)

// console.log(data_arr)


function display(data){

     let index = 0;


   

    setInterval(function(){
          container.innerHTML = "";
      if (index === data.length) {
        index = 0;
      }

            let img = document.createElement("img");
            img.src = data[index];
            index++;
            container.append(img);

    }, 1000)



    
}
8120000002




