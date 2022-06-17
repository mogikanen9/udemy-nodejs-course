const express = require('express');
const weather = require('./weather');
const path = require('path');
const hbs = require('hbs');

const app = express();

const publicFolder = path.join(__dirname, '../public');
const viewsFolder = path.join(__dirname, '../templates/views');
const partialsFolder = path.join(__dirname, '../templates/partials');

app.use(express.static(publicFolder));

app.set('view engine', 'hbs');
app.set('views', viewsFolder);
hbs.registerPartials(partialsFolder);

app.get('', (req, resp) => {
    resp.render('index', {
        title: 'Home Page',
        author: 'John Doe'
    });
});

app.get('/about', (req, resp) => {
    resp.render('about', {
        title: 'About Page',
        createdBy: 'John Doe Moe',
        author: 'John Doe'
    });
});

app.get('/help', (req, resp) => {
    resp.render('help', {
        title: 'Help Page',
        author: 'John Doe'
    });
});

app.get('/weather', (req, resp) => {
    const location = req.query.location;

    if(!location){
        return  resp.send('Location not provided');
    }

    weather.currentWeather(location, (error, data) => {

        if (error) {
            console.log('Ups, smth went wrong');
            resp.send('Ups, smth went wrong');
        } else {
            resp.send(data);
        }
    });

});


app.get('*', (req, resp) => {
    resp.render('404', {
        title: '404',
        author: 'John Doe'
    });
});

let port = process.env.PORT || 3000;


process.stdout.write(`My Web App will run at port ${port} \n`);

app.listen(port, () => {
    console.log(`My Server is up on ${port}`);
});