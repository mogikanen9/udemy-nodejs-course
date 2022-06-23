const express = require('express');
const app = express();

app.get('/', (req, res) => res.send("<h1>Hello world for Mogikanen</h1>"));

app.listen(process.env.PORT || 8080);