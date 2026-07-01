interface APIReponse {
    readonly statusCode: number; // required property
    body: string;
    headers?: object;
    responTime?: number
}

// readOnly
// Readonly - can't modify the readonly

// ? - optional

let response: APIReponse = {
    statusCode: 200, //initial value
    body: '{"user": "admin"}',
};

console.log("Status:", response.statusCode);
console.log("Body:", response.body);
console.log("Headers:", response.headers);

// response.statusCode = 404;
response.body = "dasdadas";