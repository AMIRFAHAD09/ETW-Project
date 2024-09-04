var signbox = document.getElementById("signbox");
var loginbox = document.getElementById("loginbox");

// link in signup and login form 
var login_link = document.getElementById("login_link");
var signup_link = document.getElementById("signup_link");

// this navbar login and signup button
var login_open_btn = document.getElementById("login_open_btn");
var signup_open_btn = document.getElementById("signup_open_btn");

// display using link 
    login_link.onclick = function () {
        loginbox.style.display = "block";
        signbox.style.display = "none";
    }
    signup_link.onclick = function () {
        signbox.style.display = "block";
        loginbox.style.display = "none";
    }

    // display using navbar button
    login_open_btn.onclick = function () {
        loginbox.style.display = "block";
        signbox.style.display = "none";
    }
    signup_open_btn.onclick = function () {
        signbox.style.display = "block";
        loginbox.style.display = "none";
    }