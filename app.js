const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const firebase = require('firebase');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.send('page ga ada')
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server Started on Port 3000...');
})