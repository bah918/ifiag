// const mongoose = require('mongoose');
// const UserModel = require('./models/User');
// const QuestionnaireModel = require('./models/Questionnaire');

// mongoose.connect('mongodb://localhost:27017/ifiag',{useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
//     console.log('BD connecté')
// })
const mongoose = require('mongoose');
const UserModel = require('./models/User');
const QuestionnaireModel = require('./models/Questionnaire')

mongoose.connect('mongodb://localhost:27017/ifiag',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("MongoDB connecté")
    });

async function createQuestionnaire() {
    await UserModel.deleteMany({}).exec();
    const Users = await UserModel.create(
        {
            nom: " ALi",
            prénom: "KAKA",
            age: 24,
            email: "nafiou6@yahoo.fr",
            motDePasse: "titititi",
            role: "B",
            numero: "+336 12 34 56 78 90",
        },
        {
            nom: "Jean",
            prénom: "KAKA",
            age: 56,
            email: "bernard.jean@live.fr",
            motDePasse: "bebebebe",
            role: "A",
            numero: "+337 09 87 65 43 21",
        }
    )
    await QuestionnaireModel.deleteMany({}).exec();
    await QuestionnaireModel.create(
        {
            question : "un homme",
            colonne : 1,
            utilisateurs :Users[0]._id
        },
        {
            question : "une femme",
            colonne : 1,
            utilisateurs :Users[0]._id
        },
        {
            question : "moins de 18 ans",
            colonne : 2,
            utilisateurs :Users[0]._id
        },
        {
            question : "entre 18 et 35 ans",
            colonne : 2,
            utilisateurs :Users[0]._id
        },
        {
            question : "entre 35 et 50 ans",
            colonne : 2,
            utilisateurs :Users[0]._id
        },
        {
            question : "entre 50 et 65 ans",
            colonne : 2,
            utilisateurs :Users[0]._id
        },
        {
            question : "un smartphone",
            colonne : 3,
            utilisateurs :Users[0]._id
        },
        {
            question : "une tablette",
            colonne : 3,
            utilisateurs :Users[0]._id
        },
        {
            question : "un ordinateur",
            colonne : 3,
            utilisateurs :Users[0]._id
        },
        {
            question : "je n'ai pas d'équipement",
            colonne : 3,
            utilisateurs :Users[0]._id
        },
        {
            question : "j'ai un accès internet",
            colonne : 4,
            utilisateurs :Users[0]._id
        },
        {
            question : "je n'ai pas d'accès internet car je n'ai pas souscrit d'offre",
            colonne : 4,
            utilisateurs :Users[0]._id
        },
        {
            question : "je n'ai pas d'accès internet car mon domicile ne peut pas être relié au réseau",
            colonne : 4,
            utilisateurs :Users[0]._id
        },
        {
            question : "allumer et éteindre l'ordinateur/Smartphone/tablette",
            colonne : 5,
            utilisateurs :Users[0]._id
        },
        {
            question : "me servir d'un clavier et d'une souris",
            colonne : 5,
            utilisateurs :Users[0]._id
        },
        {
            question : "faire une impression scan",
            colonne : 5,
            utilisateurs :Users[0]._id
        },
        {
            question : "créer, enregistrer et télécharger un document",
            colonne : 5,
            utilisateurs :Users[0]._id
        },
        {
            question : "utiliser une clef usb",
            colonne : 5,
            utilisateurs :Users[0]._id
        },
        {
            question : "Je ne sais pas faire les actions ci-dessus*",
            colonne : 5,
            utilisateurs :Users[0]._id
        },
        {
            question : "Faire des recherches sur internet",
            colonne : 6,
            utilisateurs :Users[0]._id
        },
        {
            question : "Utiliser les services publics en ligne CPAM, pole Emploi",
            colonne : 6,
            utilisateurs :Users[0]._id
        },
        {
            question : "Envoyer un email",
            colonne : 6,
            utilisateurs :Users[0]._id
        },
        {
            question : "Faire un achat en ligne",
            colonne : 6,
            utilisateurs :Users[0]._id
        },
        {
            question : "Suivre mes comptes bancaires en ligne",
            colonne : 6,
            utilisateurs :Users[0]._id
        },
        {
            question : "Je ne sais pas faire les actions ci-dessus",
            colonne : 6,
            utilisateurs :Users[0]._id
        },
        {
            question : "Seul, de façon autonome",
            colonne : 7,
            utilisateurs :Users[0]._id
        },
        {
            question : "accompagné (enfants, conjoints, amis, associations, aidants ...)",
            colonne : 7,
            utilisateurs :Users[0]._id
        },
        {
            question : "(champs libre)",
            colonne : 8,
            utilisateurs :Users[0]._id
        },
        {
            question : "Trop compliqué à utiliser",
            colonne : 9,
            utilisateurs :Users[0]._id
        },
        {
            question : "La qualité de service-le temps de reponse, les interruptions-n'est pas satisfaisante",
            colonne : 9,
            utilisateurs :Users[0]._id
        },
        {
            question : "les données personnelles ne sont pas suffisamment protégées sur internet",
            colonne : 9,
            utilisateurs :Users[0]._id
        },
        {
            question : "cela revient trop cher",
            colonne : 9,
            utilisateurs :Users[0]._id
        },
        {
            question : "Internet n'est pas utile pour la vie quotidienne",
            colonne : 9,
            utilisateurs :Users[0]._id
        },
        {
            question : "Le service après vente et l'assistance ne sont pas satisfaisants",
            colonne : 9,
            utilisateurs :Users[0]._id
        },
        {
            question : "Très inquiet",
            colonne : 10,
            utilisateurs :Users[0]._id
        },
        {
            question : "assez inquiet",
            colonne : 10,
            utilisateurs :Users[0]._id
        },
        {
            question : "peu inquiet",
            colonne : 10,
            utilisateurs :Users[0]._id
        },
        {
            question : "pas du tout inquiet",
            colonne : 10,
            utilisateurs :Users[0]._id
        },
        {
            question : "ne sait pas",
            colonne : 10,
            utilisateurs :Users[0]._id
        },
        {
            question : "Vous ne vous sentez pas suffisamment à l'aise, en général, avec un ordinateur ou internet ?",
            colonne : 11,
            utilisateurs :Users[0]._id
        },
        {
            question : "Vous ne vous sentez pas suffisamment à l'aise avec les sites administratifs en particulier",
            colonne : 11,
            utilisateurs :Users[0]._id
        },
        {
            question : "Vous n'avez pas suffisamment confiance dans la sécurité des données sur internet",
            colonne : 11,
            utilisateurs :Users[0]._id
        },
        {
            question : "Vous n'avez pas facilement accès à internet",
            colonne : 11,
            utilisateurs :Users[0]._id
        },
        {
            question : "Vous ne savez pas vraiment comment archiver et archiver et conserver des informatons dans le temps avec les les démarches en ligne",
            colonne : 11,
            utilisateurs :Users[0]._id
        },
        {
            question : "Toutes les démarches administratives vous inquiètent, quelle que soit la façon dont vous le faîtes",
            colonne : 11,
            utilisateurs :Users[0]._id
        },
        {
            question : "OUI",
            colonne : 12,
            utilisateurs :Users[0]._id
        },
        {
            question : "NON",
            colonne : 12,
            utilisateurs :Users[0]._id
        },
   
    )
}

createQuestionnaire();