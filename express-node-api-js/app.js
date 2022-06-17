const express = require('express');

const app = express();
const port = 8082

app.get('/', (req, res) => {
    res.send('Welcome to Express API');
});

app.get('/users', (req, res) => {
    res.send('Received a GET HTTP method');
});

app.post('/users', (req, res) => {
    return res.send('Received a POST HTTP method');
});

app.put('/users/:userId', (req, res) => {
    return res.send(
        `PUT HTTP method on user/${req.params.userId} resource`,
      );
});

app.delete('/users/:userId', (req, res) => {
    return res.send(
        `DELETE HTTP method on user/${req.params.userId} resource`,
      );
});

app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});