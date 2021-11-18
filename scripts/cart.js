let cartCounter = document.getElementById("cart-count");
let cartHolder = document.getElementById("cart-holder");

import { getRuleCartHTML } from "./rule-loader.js"

let cartList = [];

export function clearCart() {
    cartList = [];
    updateCartCount();
}

function rebuildCartHTML() {
    let html = "";
    for (let i = 0; i < cartList.length; ++i) {
        html += getRuleCartHTML(cartList[i], data[cartList[i]]);
    }
    cartHolder.innerHTML = html;
}

function updateCartCount() {
    cartCounter.innerText = cartList.length;
    rebuildCartHTML();
}

export function cartContains(id) {
    return cartList.indexOf(id) >= 0;
}

export function populateWithRequired(csv) {
    if (cartList.length == 0) {
        for (let i = 1; i < csv.length; ++i) {
            if (csv[i][17].length > 1 && csv[i][0] != "HEBERGEMENT")
                cartList.push(i);
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