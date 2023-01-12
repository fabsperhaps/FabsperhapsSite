var currency = "Pom Poms";

// Produkte anzeigen
var productList = document.getElementById("product-list");
products.forEach(function(product) {
    var item = document.createElement("li");
    item.innerHTML = product.name + " - " + product.price + " " + currency;
    if (!product.inStock) {
        item.innerHTML += " (Nicht auf Lager)";
    } else {
        var button = document.createElement("button");
        button.innerHTML = "In den Warenkorb";
        button.addEventListener("click", function() {
            addToCart(product);
        });
        item.appendChild(button);
    }
    productList.appendChild(item);
});

// Warenkorb
var cart = [];
var totalCost = 0;

function addToCart(product) {
    cart.push(product);
    updateCart();
}

function updateCart() {
    var cartList = document.getElementById("cart-list");
    var purchaseButton = document.getElementById("purchase-button");
    var totalCostElement = document.getElementById("total-cost");
    cartList.innerHTML = "";
    totalCost = 0;
    cart.forEach(function(product) {
        var item = document.createElement("li");
        item.innerHTML = product.name + " - " + product.price + " " + currency;
        cartList.appendChild(item);
        totalCost += product.price;
    });
    totalCostElement.innerHTML = "Total: " + totalCost + " " + currency;
    if (cart.length === 0) {
        purchaseButton.disabled = true;
    } else {
        purchaseButton.disabled = false;
    }
}

// Beim Klicken auf den Kaufen-Button wird die Bestellung abgeschlossen
document.getElementById("purchase-button").addEventListener("click", function() {
    alert("Danke für deine Bestellung von insgesamt " + totalCost + " " + currency + "!");
    cart = [];
    updateCart();
products.push({
    name: "Rotes Pom Pom",
    price: 5,
    inStock: true
});
