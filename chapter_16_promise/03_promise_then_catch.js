let apicall = new Promise((resolve, reject) => {
    let isAPISuccessful = true;
    if (isAPISuccessful) {
        resolve({ status: 200, body: "user data", message: "API call successful!" });
    }
});

console.log(apicall);


apicall.then(function (response) {
    console.log(response);
    console.log("Status:", response.status);
    console.log("Message:", response.message);
    console.log("Body:", response.body);
});


let apicall2 = new Promise((resolve, reject) => {
    reject({ status: 500, message: "API call failed." });
});

console.log(apicall2);
apicall2.then(function (response) {
}).catch(function (error) {
    console.error(error);
    console.log("Status:", error.status);
    console.log("Message:", error.message);
});