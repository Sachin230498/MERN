let main = document.getElementById("main");
let filter = document.getElementById("filter");

let api = "https://resta.onrender.com/categories";
let data ;

getData();

async function getData() {
  try {
    let res = await fetch(api);
     data = await res.json();
    display(data);
  } catch (error) {
    console.log(error);
  }
}

function display(data) {
  main.innerHTML = ""; // Clear previous content
  data.forEach(function (el) {
    let div = document.createElement("div");
    let name = document.createElement("h1");
    name.innerText = el.name;

    let price = document.createElement("h2");
    price.innerText = el.price;

    let img = document.createElement("img");
    img.src = el.img;

    div.append(img, name, price);
    main.append(div);
  });
}


console.log(data)

function sortbyprice() {
  let sortedData;

  if (filter.value == "HTL") {
    sortedData = [...data].sort((a, b) => b.price - a.price);
  } else if (filter.value == "LTH") {
    sortedData = [...data].sort((a, b) => a.price - b.price);
  } else {
    sortedData = data; // If no sorting option is selected, use the original data
  }

  display(sortedData);
}

// Event listener for filter change
filter.addEventListener("change", sortbyprice);
