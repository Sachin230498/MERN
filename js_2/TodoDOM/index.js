let form = document.querySelector("form");
let tbody = document.querySelector("tbody");


// console.log(data)

 let arr = JSON.parse(localStorage.getItem("data")) || [];
displayData(arr)

function getData() {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let task = document.getElementById("task").value;

    let pri = document.getElementById("priority").value;
  // let arr = [];
    let obj = {
      task,
      pri,
    };

    arr.push(obj);
    localStorage.setItem("data", JSON.stringify(arr));
    displayData(arr);

    // console.log(arr);
  });
}

getData();


function displayData(data) {
   tbody.innerHTML = "";
  for(let i = 0; i < data.length; i++) {
      let row = document.createElement('tr');
      let cell1 = document.createElement('td');
      cell1.innerText = data[i].task
      let cell2 = document.createElement('td');
      cell2.innerText = data[i].pri
      if(data[i].pri === "High"){
        cell2.style.backgroundColor ="red";
      }else{
        cell2.style.backgroundColor ="green";
      }

      let cell3 = document.createElement('td');
      cell3.addEventListener("click",function(){
        delfun(i)
      })
      cell3.innerText ="Delete"

      cell3.style.backgroundColor ="red";
    row.append(cell1,cell2,cell3);
    tbody.append(row);
  }

}



function delfun(index){

   arr.splice(index,1)
   localStorage.setItem("data", JSON.stringify(arr))
   displayData(arr)
}


// let ar = [12,23,4,5,89,96]
// //splice(index, no of elements)
// let b = ar.splice(1,1)

// console.log(b)
// console.log(ar)

