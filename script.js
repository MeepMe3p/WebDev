let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");


let cartItems = [];
let totalCost = 0;

function hello(){
    window.location.href = "profile.html";
}
function login() {
    var email = document.getElementById("emailField").querySelector("input").value;
    var password = document.getElementById("passwordField").querySelector("input").value;
    var validEmail = "elijah";
    var validPassword = "123";
    if (email === validEmail && password === validPassword) {
        window.location.href = "profile.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
    return false;
}


function addToCart(price) {
    cartItems.push(price);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cartList');
    const totalElement = document.getElementById('total');

    cartList.innerHTML = "";
    totalCost = cartItems.reduce((acc, item) => acc + item, 0);

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `$${item}`;
        cartList.appendChild(li);
    });

    totalElement.textContent = totalCost;

    const checkoutBtn = document.getElementById('checkoutBtn');
    checkoutBtn.disabled = cartItems.length === 0;
}

document.getElementById('paymentMethod').addEventListener('change', function () {
    const creditCardDetails = document.getElementById('creditCardDetails');
    creditCardDetails.style.display = this.value === 'creditCard' ? 'block' : 'none';
});

function processPayment() {
    alert(`Payment successful!\nTotal Amount: $${totalCost}`);
}

