const Express = require('express');
const App = Express();
const port = 80;

const People = require("./People.js")
let people = new People();

App.use("/", Express.static("public"));

App.get("/person/name/:name", (req, res) => {

    res.send(people.readName(req));  

});

App.get("/person/color/:color", (req, res) => {

    res.send(people.readColor(req));  

});

App.post("/people/person/:name/:color", (req, res) => {

    res.send(req.params);

});

App.listen(port, () =>{
    console.log("Server Running!");
});