const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello All! Version 3 it is'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
console.log(`Hello All! Version 2 it is`);