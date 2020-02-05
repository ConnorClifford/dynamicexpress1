const Express = require('express');
const App = Express();
const port = 80;

const People = require("./people.js")
let people = new People();

App.get("/person/name/:name", (req, res) => {

    res.send(people.readName(req));  

});

App.get("/person/color/:color", (req, res) => {

    res.send(people.readColor(req));  

});

App.listen(port, () =>{
    console.log("Server Running!");
});