// const mongoose = require('mongoose');
// const UserModel = require('./models/User');
// const QuestionnaireModel = require('./models/Questionnaire');

// mongoose.connect('mongodb://localhost:27017/ifiag',{useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
//     console.log('BD connecté')
// })
const mongoose = require('mongoose');
const UserModel = require('./models/User');
const PlanningModel = require('./models/Planning')

mongoose.connect('mongodb://localhost:27017/hiversolidaire',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("MongoDB connecté")
    });

async function createPlanning() {
    await UserModel.deleteMany({}).exec();
    const Users = await UserModel.create(
        {
            nom: "Olicard ",
            prénom: "Fabien",
            age: 24,
            email: "fabien.oli@live.fr",
            motDePasse: "fafafafa",
            role: "B",
            numero: "+336 12 34 56 78 90",
        },
        {
            nom: "Jean",
            prénom: "Bernard",
            age: 56,
            email: "bernard.jean@live.fr",
            motDePasse: "bebebebe",
            role: "A",
            numero: "+337 09 87 65 43 21",
        }
    )
    await PlanningModel.deleteMany({}).exec();
    await PlanningModel.create(
        {
            date: '2022/01/03',
            activité: "",
            bénévole: Users[0]._id
        },
        {
            date: '2022/01/03',
            activité: "",
            bénévole: Users[1]._id
        },
        {
            date: '2022/01/03',
            activité: "",
        },
   
    )
}

createPlanning();