const express = require('express');
const bodyParser = require('body-parser');
const Smooch = require('smooch-core');
const marked = require('marked');
const fs = require('fs');

const USERNAME = process.env.USERNAME || 'admin';
const PASSWORD = process.env.PASSWORD || 'admin';

const smooch = new Smooch({
    appToken: '1z8nldxof2a9i6vcdkjc0d7zu',
    keyId: process.env.KEY_ID,
    secret: process.env.SECRET,
    scope: 'app'
});
const config = JSON.stringify({
    appToken: '1z8nldxof2a9i6vcdkjc0d7zu',
    customText: {
        headerText: 'Have a question?',
        introductionText: 'I\'m here to help you out.',
        introAppText: '',
        settingsText: ''
    }
});

const scripts = `<script src="https://cdn.smooch.io/smooch.min.js"></script><script>Smooch.init(${config});</script>`;
const pages = fs.readdirSync(__dirname + '/pages')
    .map(fileName => ({
        html: marked(fs.readFileSync(__dirname + '/pages/' + fileName).toString()),
        title: fileName.split('.')[0]
    }))
    .reduce((pages, page) => {
        const doc = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>${page.title}</title><link rel="stylesheet" href="/github-markdown.css"></head><body><div class="markdown-body">${page.html}${scripts}</div></body></html>`;
        pages[page.title] = doc;
        return pages;
    }, {});

express()
    .get('/pages/:page', (req, res) => {
        const page = pages[req.params.page];
        if (page) {
            res.send(page);
        } else {
            res.status(404).send('404 ¯\_(ツ)_/¯ not found.');
        }
    })
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
    .listen(process.env.PORT || 8003);
