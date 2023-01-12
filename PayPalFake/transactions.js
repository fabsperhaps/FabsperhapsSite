var db;

// open a connection to the database
var request = window.indexedDB.open("transactions", 1);

request.onupgradeneeded = function(event) {
    db = event.target.result;
    var objectStore = db.createObjectStore("transactions", { autoIncrement: true });
    objectStore.createIndex("name", "name", { unique: false });
    objectStore.createIndex("amount", "amount", { unique: false });
    objectStore.createIndex("date", "date", { unique: false });
};

request.onsuccess = function(event) {
    db = event.target.result;
    console.log("Successfully opened a connection to the database");
};

request.onerror = function(event) {
    console.log("Error opening a connection to the database");
};

// function to add a new transaction to the database
function addTransaction(name, amount, date) {
    var transaction = db.transaction(["transactions"], "readwrite");
    var objectStore = transaction.objectStore("transactions");

    var transactionData = {
        name: name,
        amount: amount,
        date: date
    };

    var request = objectStore.add(transactionData);
    request.onsuccess = function(event) {
        console.log("Transaction added successfully");
    };
    request.onerror = function(event) {
        console.log("Error adding transaction to the database");
    }
}

// function to retrieve all transactions from the database
function getTransactions() {
    var transaction = db.transaction(["transactions"], "readonly");
    var objectStore = transaction.objectStore("transactions");
    var request = objectStore.getAll();
    request.onsuccess = function(event) {
        console.log("Transactions retrieved successfully", event.target.result);
    };
    request.onerror = function(event) {
        console.log("Error retrieving transactions from the database");
    }
}
