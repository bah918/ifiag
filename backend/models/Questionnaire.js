const mongoose = require('mongoose');

const questionnaireSchema = new mongoose.Schema({
    question : String,
    colonne : String,
    utilisateurs:{
        type:mongoose.Types.ObjectId,
        ref:'Users'
    }
});

const QuestionnaireModel = mongoose.model('Questionnaire', questionnaireSchema);

module.exports = QuestionnaireModel;