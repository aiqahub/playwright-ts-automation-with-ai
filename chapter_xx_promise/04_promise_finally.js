let apicall = new Promise((resolve, reject) => {
    let isAPISuccessful = false;
    if (isAPISuccessful) {
        resolve({ status: 200, body: "user data", message: "API call successful!" });
    } else {
        reject({ status: 500, message: "API call failed." });
    }
});

console.log(apicall);


apicall.then(function (response) {
    console.log(response);
    console.log("Status:", response.status);
    console.log("Message:", response.message);
    console.log("Body:", response.body);
}).catch(function (error) {
    console.error(error);
    console.log("Status:", error.status);
    console.log("Message:", error.message);
}).finally(function () {
    console.log("API call completed.");
});