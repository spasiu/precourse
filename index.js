const express = require('express');
const bodyParser = require('body-parser');
const Smooch = require('smooch-core');

const USERNAME = process.env.USERNAME || 'admin';
const PASSWORD = process.env.PASSWORD || 'admin';


const smooch = new Smooch({
    keyId: process.env.KEY_ID,
    secret: process.env.SECRET,
    scope: 'app'
});

express()
    .use(express.static('public'))
    .use(bodyParser.json())
    .post('/user', (req, res) => {
        if (req.body.username !== USERNAME || req.body.password !== PASSWORD) {
            console.log(req.body);
            return res.status(401).end();
        }
        smooch.appUsers.create(req.body.userId, {
            givenName: req.body.givenName,
            surname: req.body.surname,
            email: req.body.email,
            properties: req.body.properties
        })
            .then(response => res.json(response))
            .catch(err => res.status(500).send(err.message));
    })
    .listen(8003);
