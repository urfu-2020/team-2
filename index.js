const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`Hello, world!`);
});

app.all('*', (req, res) => {
    res.sendStatus(404);
});

app.listen(3000);