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
            <td colspan="1" class="clear-cart" onclick="clearCart()" style="cursor: pointer;"><u>Clear Cart</u></td>
            <td colspan="4" style="text-align:right; padding: 10px;"><strong>Your total is:</strong> <u><i>£${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</i></u></td>
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
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        document.getElementById('Universal-Overlay__ErrorField').innerHTML = 'You have no items in your cart';
        showOverlay();
    } else
        if (!IsCartValid(name, email, phone)) {
            document.getElementById('Universal-Overlay__ErrorField').innerHTML = 'Please fill in all fields correctly';
            showOverlay();
        } else {
            document.getElementById('Universal-Overlay__ErrorField').innerHTML = 'Order successfully placed!';
            showOverlay();
            hideOverlay = function() {
                location.reload();
            };
            localStorage.removeItem("cart");
        }
});
