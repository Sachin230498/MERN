let form = document.querySelector('form');

form.addEventListener('submit', getData)

let signup_arr = JSON.parse(localStorage.getItem("signup_data")) || [];

function getData(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let mobile = document.getElementById('mob').value;
    let pass = document.getElementById('pass').value;

    let data={
         name,
         email,
        mobile,
        pass
    }


    signup_arr.push(data);

    localStorage.setItem('signup_data', JSON.stringify(signup_arr));
    alert('Signup Successfully');
    window.location.href = "../html/login.html";
 
    // console.log(signup_arr)


}

    // console.log(window.location.href = "../html/index.html") ;

// localStorage.clear();