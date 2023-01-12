var menu = document.getElementById("options");

menu.addEventListener("change", function() {
    var selectedOption = menu.value;

    if (selectedOption === "login") {
        window.location.href = "login.html";
    } else if (selectedOption === "transactions") {
        window.location.href = "transactions.html";
    }
});
