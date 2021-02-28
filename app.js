var express = require('express');

var app = express();
app.listen(3000, 'localhost', ()=>{
    console.log("App running on port 3000");
});