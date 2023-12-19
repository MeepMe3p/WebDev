let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
signinBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    title.innerHTML= "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");

}

signupBtn.onclick = function(){
    nameField.style.maxHeight = "60px";
    title.innerHTML= "Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}



document.addEventListener('DOMContentLoaded', function () {
    function login() {
        // Get the values of emailField and passwordField
        var emailField = document.getElementById("emailField").querySelector("input").value;
        var passwordField = document.getElementById("passwordField").querySelector("input").value;

        if (emailField === "elijah" && passwordField === "12345") {
            // Open the profile.html file or perform the desired action
            window.location.href = "profile.html";
        } else {
            // Display an error message or perform other actions for unsuccessful login
            console.log("Login failed. Incorrect credentials.");
        }
    }
});

