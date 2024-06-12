
var usernameRegex = /^[a-zA-Z0-9]{5,12}$/
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}|:<>?~-]).{8,20}$/;
var telRegex = /^[6-9]\d{9}$/;

function errmsg(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
}
function clearErrmsg() {
    const errorElements = document.querySelectorAll(".errormessage");
    errorElements.forEach(element => {
        element.textContent = "";
    });
}

function validation(e) {
    clearErrmsg();
    e.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var tel = document.getElementById("tel").value;

    if (username === "") {
        errmsg('usernameErr', 'please enter username');
    }
    else if (!usernameRegex.test(username)) {
        errmsg('usernameErr', 'Username must be between 5 to 12 characters');
    }
    if (email === "") {
        errmsg('emailErr', 'please enter email id');
    }
    else if (!emailRegex.test(email)) {
        errmsg('emailErr', 'Email must be a valid address, e.g. me@mydomain.com');
    }
    if (password === "") {
        errmsg('passwordErr', 'Please type the password');
    }
    else if (!passwordRegex.test(password)) {
        errmsg('passwordErr', 'Password must be 8 to 20 characters,alpha numaricand must contain @ # $ %');
    }
    if (tel === "") {
        errmsg('phoneErr', 'Please type the phone number')
    }
    else if (!telRegex.test(tel)) {
        errmsg('phoneErr', 'Telephone must be a valid Indian telephone number(10 digits)')
    }
}
