//add to cart function
function addToCart(name, description, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, description, price, image });
    localStorage.setItem("cart", JSON.stringify(cart));
    showToast(name);
}

//show cart function

function clearCart() {
    localStorage.removeItem("cart");
    displayCart(); // Refresh the cart display
}

function displayCart() {
    const cartTable = document.getElementById("cart-items");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartTable.innerHTML = "";
    if (cart.length === 0) {
        cartTable.innerHTML = "<tr><td colspan='4' style='text-align:center;'>You have no items in your cart</td></tr>";
    } else {
        cart.forEach(item => {
            cartTable.innerHTML += `
                <tr>
                <td><img src="/assets/images/${item.image}" alt="${item.name}" class="cart-img" width="200px"></td>
                <td>${item.name}</td>
                <td>${item.description}</td>
                <td>£${item.price}</td>
                </tr>
            `;
        });
        cartTable.innerHTML += `
            <tr>
                <td colspan="3" style="text-align:right;"><strong>Your total is:</strong></td>
                <td>£${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</td>
            </tr>
        `;
    }
}

// Cart Check Out Function

document.getElementById("checkout-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name-input").value;
    let email = document.getElementById("email-input").value;
    let phone = document.getElementById("phone-input").value;

    if (!isFormValid(name, email, phone)) {
        showError();
    } else {
        showSuccess();
        localStorage.removeItem("cart");
    }
});

