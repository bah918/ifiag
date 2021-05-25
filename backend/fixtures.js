const mongoose = require('mongoose');
const UserModel = require('./models/User');
const QuestionnaireModel = require('./models/Questionnaire');

mongoose.connect('mongodb://localhost:27017/ifiag',{useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
    console.log('BD connecté')
})