const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const QuestionnaireModel = require('./models/Questionnaire');
const UserModel = require('./models/User');


mongoose.connect('mongodb://localhost:27017/ifiag',{useNewUrlParser: true, useUnifiedTopology: true},()=>{
    console.log("Mongodb connecté");
})
app.listen(port, ()=>{
    console.log('Serveur lancé')
})

app.get("/bonjour/:lang", (req, res)=>{
  req 
 
})

