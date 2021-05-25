const mongoose = require('mongoose');

const questionnaireSchema = new mongoose.Schema({
    utilisateurs:{
        type:mongoose.Types.ObjectId,
        ref:'Users'
    }
});

const QuestionnaireModel = mongoose.model('Questionnaire', questionnaireSchema);

module.exports = QuestionnaireModel;