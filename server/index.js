require('dotenv').config()
const express = require("express")
//const cors = require("cors")
const path = require("path")
const contactRoute = require("./route/contactRoute");

const app = express()

app.use(express.json());
app.use(express.static(__dirname + '/../client/build'));
//app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/contact", contactRoute);

const port = process.env.PORT || 3001

app.get('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, '/../client/build', 'index.html'));
})

app.use( (err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send({message: err.message})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})