let order = new Promise((resolve, reject) => {
    let isCoffeeMachineReady = false;
    if (isCoffeeMachineReady) {
        resolve("Order placed successfully!");
    } else {
        reject("Failed to place order.");
    }
});
console.log(order);

// To handle the resolved value of the promise, we can use the .then() method:
order.then((message) => {
    console.log(message);
}).catch((error) => {           // To handle any errors that occur during the promise execution, we can use the .catch() method:
    console.error(error);
});