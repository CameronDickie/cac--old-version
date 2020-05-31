const express = require('express');
//const esession = require('express-session');
const vue = require('vue');
const app = express();

console.log("Server is running @ port 3000");
app.listen(3000);

app.get("/", function(req, res, next) {
    //serve the home page and load the scripts associated with the page
    res.sendFile("./views/pages/index.html", {root:"./"}, (err) => {
        if (err) {
            next(err);
        }
        console.log("Sending index page");
    })
})
app.get("/vue.js", function(req, res, next) {
    res.sendFile("./scripts/vue.js", {root:"./"}, (err) => {
        if(err) {
            next(err);
        }
        console.log("vue script was sent");
    })
})
app.get("/index.js", function(req, res, next) {
    res.sendFile("./scripts/index.js", {root: "./"}, (err) => {
        if(err) {
            next(err);
        }
        console.log("index js was sent");
    })
})