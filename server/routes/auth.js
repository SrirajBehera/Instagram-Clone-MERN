const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("HELLO");
})

router.post('/signup', (req, res) => {
    console.log(req.body);
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        // code 422 - server has understood the request but couldn't process the same
        return res.status(422).json({error: "Please add all the fields"});
    }
    res.json({message: "Successfullt Posted"});
})

module.exports = router;