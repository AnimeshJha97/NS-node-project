const express = require('express');
const bodyParser = require('body-parser');
const Mongoose = require('mongoose');

const DB_USER = 'accountUser';
const psd = encodeURIComponent('admin');
const DB_URL = `mongodb://${DB_USER}:${psd}@localhost:27017/newtonschool`;

const app = express();

app.use(bodyParser.json());

Mongoose.connect(DB_URL).then(() => {
    console.log("Database created Successfully");
}).catch((err) => {
    console.log(err);
});

app.get('/', (req, res) => {

    const personObj = {
        fname : "Animesh",
        lname : "Jha", 
        id : 1000
    }
    
    console.log("first name : ", req.query.fname);
    console.log("last name : ", req.query.lname);
    
    res.send(personObj);
})

app.post('/start', (req, res) => {
    // console.log("first name : ", req.query.fname);
    // console.log("last name : ", req.query.lname);

    // const personObj = {
    //     fname : "Animesh",
    //     lname : "Jha"
    // }
    res.send("Post Request");
})


app.listen(3000, 'localhost', ()=>{
    console.log("App running on port 3000");
});