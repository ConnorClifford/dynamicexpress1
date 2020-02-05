const Express = require('express');
const App = Express();
const port = 80;

const Person = require("./Person.js");
let p = new Person("Connor", "blue");
let people = [];

const faker = require('faker');

for(let i=0;i<99;i++){
    let name = faker.name.findName();
    let color = faker.commerce.color();
    people.push(new Person(name, color));
}

//console.log(people[10]);

App.get("/person/name/:name", (req, res) => {
    people.forEach((value) => {
        if(value.name == req.params.name){
            res.send(value);
        }
    });
    res.send("Nothing found that matches that. :'(")
});

App.get("/person/color/:color", (req, res) => {
    people.forEach((value) => {
        if(value.color == req.params.color){
            res.send(value);
        }
    });
    res.send("Nothing found that matches that. :'(")
});

App.listen(port, () =>{
    console.log("Server Running!");
});