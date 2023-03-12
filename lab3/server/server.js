const express = require('express');
const app=express();
const fs = require("fs");

let WelcomeFileHTML = fs.readFileSync("../client/welcome.html").toString();
const PORT= process.env.PORT || "7003";
const path=require('path');
app.use(express.json());
app.use(express.urlencoded({ extended:true}));

var clientName = "";
var MobileNumber = "";
var Email = "";
var Address = "";

function directory(url){
    return path.join(__dirname, url);
} 
app.get('/index.html',(req, res)=>{
    res.sendFile(directory("../client/index.html"));
    })
app.get('/style.css',(req, res)=>{
    res.sendFile(directory("../client/style.css"));
    })
app.get('/form.js',(req, res)=>{
    res.sendFile(directory("../client/form.js"));
    })
app.get('/welcome.html',(req, res)=>{
    res.sendFile(directory("../client/welcome.html"));
    })

app.post("/welcome.html",(req,res, next)=>{
    clientName= req.body["name"];
    Email = req.body["email"];
    MobileNumber = req.body["phone"];
    Address = req.body["address"];
    WelcomeFileHTML=WelcomeFileHTML.replace("{clientName}",clientName);
    WelcomeFileHTML=WelcomeFileHTML.replace("{MobileNumber}",MobileNumber);
    WelcomeFileHTML=WelcomeFileHTML.replace("{Email}",Email);
    WelcomeFileHTML=WelcomeFileHTML.replace("{Address}",Address);
            next();
        },(req,res)=>{
            res.send(WelcomeFileHTML);
        }
        );
app.listen(PORT,()=>{console.log("http://localhost:"+PORT)});