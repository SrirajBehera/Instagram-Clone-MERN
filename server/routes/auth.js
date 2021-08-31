const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const User = mongoose.model('User');

router.get('/', (req, res) => {
    res.send("HELLO");
})

router.post('/signup', (req, res) => {
    console.log(req.body);
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        // code 422 - server has understood the request but couldn't process the same
        return res.status(422).json({ error: "Please add all the fields" });
    }
    // res.json({ message: "Successfully Posted" });

    User.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "User with that email already exists." });
            }
            
            const user = new User({
                name: name, // if key and value are both same then we can condense it to just name, email, etc.
                email: email,
                password: password
            });

            user.save()
            .then((user) => {
                res.json({message: "Saved successfully!"});
            })
            .catch((err) => {
                console.log(`Error saving user - ${err}`);
            })
        })
        .catch((err) => {
            console.log(`Error in email findOne - ${err}`);
        })
})

module.exports = router;