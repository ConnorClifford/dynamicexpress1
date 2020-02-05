const Express = require('express');
const App = Express();
const port = 80;

const People = require("./people.js")
let people = new People();

App.get("/person/name/:name", (req, res) => {

    let result = "Nothing found that matches that. :(";

    people.forEach((value) => {
        if(value.name == req.params.name){
            console.log(req.path);
            result = value;
        }
    });
    res.send(result);
});

App.get("/person/color/:color", (req, res) => {

    res.send(people.readColor(req));  

});

App.listen(port, () =>{
    console.log("Server Running!");
});