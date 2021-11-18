let cartCounter = document.getElementById("cart-count");

let cartList = [];

export function clearCart() {
    cartList = [];
    updateCartCount();
}

function updateCartCount() {
    cartCounter.innerText = cartList.length;
    console.log(cartList);
}

export function cartContains(id) {
    return cartList.indexOf(id) >= 0;
}

export function populateWithRequired(csv) {
    if (cartList.length == 0) {
        for (let i = 0; i < csv.length; ++i) {
            if (csv[i][17].length > 1)
                cartList.push(i - 1);
        }
        updateCartCount();
    }
}

export function addItem(id) {
    if (!cartContains(id)) {
        cartList.push(id);
        updateCartCount();
    }
}

export function removeItem(id) {
    if (cartContains(id)) {
        cartList.splice(cartList.indexOf(id), 1);
        updateCartCount();
    }
}