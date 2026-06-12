let testResult = ["Passed", "Failed", "Skipped", "Passed", "Failed"];
testResult.forEach(function (result) {
    console.log(result); // this anonymous function is the callback
});

setTimeout(function () {
    console.log("This runs after 0 seconds");
}, 0); // Even with 0 delay, this runs after the current code finishes executing

