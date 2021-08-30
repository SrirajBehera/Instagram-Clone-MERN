const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 5000;

const {MONGOURI} = require('./keys'); // destructuring

// registering our User model here
require('./models/user');
mongoose.model("User");
mongoose.connect(MONGOURI);

app.use(express.json()) // parse to json
app.use(require('./routes/auth'));

mongoose.connection.on('connected', () => {
    console.log("Connected to Cloud MongoDB Atlas");
})

mongoose.connection.on('error', (err) => {
    console.log("Error: ", err);
})

// // MiddleWare is something or a piece of code which takes the incoming request and it modifies it before it reaches the route handler
// // when provided no parameters, our server will hang.
// const customMiddleWare = (req, res, next) => {
//     console.log("MiddleWare Executed");
//     next(); // will stop if no furthur middleware or will jump to next middleware if present
// }

// // app.use(customMiddleWare); // will run everytime before the GET request (for all requests)

// app.get('/', (req, res) => {
//     console.log("This will be printed after the middle ware is executed");
//     res.send("Hello World");
// })

// // when we pass another parameter then middleware can be exected in that request only
// app.get('/about', customMiddleWare, (req, res) => {
//     console.log("This will be printed after the middle ware is executed");
//     res.send("Hello World About");
// })

app.listen(PORT, () => {
    console.log(`The Server is running on port: ${PORT}`);
})