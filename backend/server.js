const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./api/routes/user')
const mongoose = require("mongoose");

const PORT = process.env.PORT || 6464;

let mongourl = "mongodb+srv://teguh:teguh@cluster0.oa9la.mongodb.net/JC?retryWrites=true&w=majority" || "mongodb://localhost:27017/JC";
//let mongourl = "mongodb+srv://Teguh:irJqWtzp2iAO6nbx@cluster0.03qpd.mongodb.net/ArisApi?retryWrites=true&w=majority"
//let mongourl = "mongodb+srv://aris:Aris2121!@cluster0.03qpd.mongodb.net/ArisApi?retryWrites=true&w=majority"


mongoose.connect(mongourl, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"))
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/user', userRoute);

app.use((req, res, next) => {
    res.status(404).json({
        error: 'halaman tidak ditemukan  contog : localhost:6464/user '
    })
})


app.use((req, res, next) => {
    res.status(200).json({
        message: `app is running local host ${PORT}`
    })
});


app.listen(PORT, () => console.log(`Localhost sudah berjalan di port ${PORT}`))
