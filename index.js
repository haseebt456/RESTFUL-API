const express = require("express");
const app = express();

app.use(express.json());
const courses = ["web-technologies","Porgramming fundamentals","ICT"];

//first parameter is url
//second parameter is a function with two inputs one is request and one is response
app.get('/api/courses',function(req,res){
    res.send(courses);
});
app.get('/api/courses/:index',function(req,res){
    if(!product[req.params.index]){
    return res.status(400).send("Product not found");
    }
    res.send(courses[req.params.index]);
});

app.put("/api/courses/:index",function(req,res){
    //console.log(req.body);
    courses[req.params.index] = res.req.body.name;
    res.send(courses[req.params.index]);
});
app.delete("/api/courses/:index",function(req,res){
    courses.splice(req.params.index,1);
    res.send(courses);
});

app.post("/api/courses/:index",function(req,res){
    courses.push(req.body.name);
    res.send(courses);
})
//specifiying port fot local server
app.listen(4000);