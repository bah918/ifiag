const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const QuestionnaireModel = require('./models/Questionnaire');
const UserModel = require('./models/User');
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/ifiag',{useNewUrlParser: true, useUnifiedTopology: true},()=>{
    console.log("Mongodb connecté");
})
app.listen(port, ()=>{
    console.log('Serveur lancé')
})

app.get('/questionnaire', async (req, res)=>{

})