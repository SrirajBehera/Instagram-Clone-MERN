const express = require('express');
const app = express();

const PORT = 5000;

// MiddleWare is something or a piece of code which takes the incoming request and it modifies it before it reaches the route handler
// when provided no parameters, our server will hang.
const customMiddleWare = (req, res, next) => {
    console.log("MiddleWare Executed");
    next(); // will stop if no furthur middleware or will jump to next middleware if present
}

// app.use(customMiddleWare); // will run everytime before the GET request (for all requests)

app.get('/', (req, res) => {
    console.log("This will be printed after the middle ware is executed");
    res.send("Hello World");
})

// when we pass another parameter then middleware can be exected in that request only
app.get('/about', customMiddleWare, (req, res) => {
    console.log("This will be printed after the middle ware is executed");
    res.send("Hello World About");
})

app.listen(PORT, () => {
    console.log(`The Server is running on port: ${PORT}`);
})