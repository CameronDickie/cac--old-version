const express = require('express');
//const esession = require('express-session');
const vue = require('vue');
const app = express();

console.log("Server is running @ port 3000");
app.listen(3000);

app.get("/", function(req, res) {
    //serve the home page and load the scripts associated with the page
    let html = "<div>This is a test</div>"
    res.write(html);
    res.status(200).send();
})