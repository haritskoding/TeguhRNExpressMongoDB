const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoute = require('./api/routes/user')
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//const mongoURI = 'mongodb+srv://teguh:teguh@cluster0.oa9la.mongodb.net/JC?retryWrites=true&w=majority'
const mongoURI = 'mongodb://localhost:27017/JC'
mongoose.connect(mongoURI, {
    useNewUrlParser: true
})

mongoose.connection.on('error', err => {
    console.log('connection failed' + err)
})

mongoose.connection.on('connected', connected => {
    console.log('connection with database')
})

app.use('/user', userRoute)

app.use((req, res, next) => {
    res.status(404).json({
        error: 'halaman tidak ditemukan / bad request'
    })
})

app.use((req, res, next) => {
    res.status(200).json({
        message: 'app is running local host 3000'
    })
});

module.exports = app;