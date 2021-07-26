//import React from 'react';
import { Pagination } from "antd";
import React, { useEffect, useState } from "react";

//import {Link} from "react-router-dom";
import { Styles } from '../components/styles';

function Home() {

    const [semaineStart, setSemaineStart] = useState([])
    const [semaineEnd, setSemaineEnd] = useState([])
    const [numberOfPage, setNumberOfPage] = useState(0);
    const [page, setPage] = useState(0);

    // useEffect(() => {
    //     Questionnaire();
    //   }, [page]);

    //   const Questionnaire = () => {
    //     return fetch(`http://localhost:8000/planning?limit=35&page=${page}`)
    //       .then((response) => {
    //         return response.json();
    //       })
    //       .then((response) => {
    //         console.log(response);
    //         setPlanning(response);
    //         // setActivity(response);
    //         setNom(response);
    //         setPrénom(response);

    //       });
    //   };
    //debut 
    // const showPreviousPage = ()=>{
    //     if(page===0){


    //     }
    // }

    return (
        <Styles>
            {/* debut */}
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#">Previous</a>
                    </li>

                    <li class="page-item">
                        <a class="page-link" href="#">
                            <h2 >Le questionnaire</h2>
                            {/* debut */}

                            <div className="container d-flex">
                                <table className="table table-hover table-bordered align-middle ">
                                    <caption ><p style={{ textAlign: "center", justifyContent: 'center', alignItems: 'center', }}>Institut Français de l'Intelligence Artificielle et de la Génétique - IFIAG <br />
                                        88, avenue des Ternes 75017 PARIS - Tél 01 41 34 38 25 - Site www.ifiag.org <br />
                                        SIREN 884 158 072 - RNA W751253501 - APE 8559B</p></caption>
                                    <thead style={{ backgroundColor: 'gold' }}>
                                        {/*<tr style={{ textAlign:"Left", fontSize:"12px", fontWeight:"bolder" }}>
                                                                  <th scope="col">1</th>
                                                                  <th scope="col">je</th>
                                                                   </tr> */}
                                    </thead>
                                    <tbody>
                                        <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                            <th scope="row" rowSpan="2" style={{ backgroundImage: "linear-gradient(to left, #5499C7 2%, #21618C)", width: "8%", textAlign: "center", color: 'black' }}>1</th>
                                            <td style={{ backgroundColor: "#A9CCE3 " }} colSpan="6">Je suis</td>

                                        </tr>
                                        <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                            <td style={{ textAlign: "left" }}><input type="checkbox"></input> <p style={{ marginTop: -20, marginLeft: 17 }}>un homme</p></td>
                                            <td colSpan="5"><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>une femme</p></td>
                                        </tr>
                                        <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                            <th scope="row" rowSpan="2" style={{ backgroundImage: "linear-gradient(to left, #5499C7 2%, #21618C)", width: "8%", textAlign: "center" }}>2</th>
                                            <td style={{ backgroundColor: "#A9CCE3 " }} colSpan="6">J'ai</td>

                                        </tr>
                                        <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>moins de 18 ans</p></td>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>entre 18 et 35 ans</p></td>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>entre 35 et 50 ans</p></td>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>entre 50 et 65 ans</p></td>
                                            <td colSpan="2"><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>plus de 65 ans</p></td>
                                        </tr>
                                        <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                            <th scope="row" rowSpan="2" style={{ backgroundImage: "linear-gradient(to left, #5499C7 2%, #21618C)", width: "8%", textAlign: "center" }}>3</th>
                                            <td style={{ backgroundColor: "#A9CCE3 " }} colSpan="6">A domicile, je possède</td>

                                        </tr>
                                        <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>un smartphone</p></td>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>une tablette</p></td>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>un ordinateur</p></td>
                                            <td colSpan="3"><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>je n'ai pas d'équipement</p></td>
                                        </tr>
                                        <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                            <th scope="row" rowSpan="2" style={{ backgroundImage: "linear-gradient(to left, #5499C7 2%, #21618C)", width: "8%", textAlign: "center" }}>4</th>
                                            <td style={{ backgroundColor: "#A9CCE3" }} colSpan="6">Connexion/à domicile</td>
                                        </tr>
                                        <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>j'ai un accès  internet</p> <br></br></td>
                                            <td><input style={{ marginTop: 0 }} type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>je n'ai pas d'accès internet car je n'ai pas souscrit d'offre</p></td>
                                            <td colSpan="4"><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>je n'ai pas d'accès internet car mon domicile ne peut pas être relié au réseau</p><br></br></td>
                                        </tr>
                                        <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                            <th scope="row" rowSpan="2" style={{ backgroundImage: "linear-gradient(to left, #5499C7 2%, #21618C)", width: "8%", textAlign: "center" }}>5</th>
                                            <td style={{ backgroundColor: "#A9CCE3" }} colSpan="6">Usages Equipement : je sais</td>
                                        </tr>
                                        <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>allumer et éteindre l'ordinateur/Smartphone/tablette</p></td>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>me servir d'un clavier et d'une souris</p></td>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>faire une impression scan</p></td>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>créer, enregistrer et télécharger un document</p></td>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>utiliser une clef usb </p><br></br></td>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>Je ne sais pas faire les actions ci-dessus*</p></td>
                                        </tr>
                                        <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                            <th scope="row" rowSpan="2" style={{ backgroundImage: "linear-gradient(to left, #5499C7 2%, #21618C)", width: "8%", textAlign: "center" }}>6</th>
                                            <td style={{ backgroundColor: "#A9CCE3" }} colSpan="6">Usages internet-Je sais</td>
                                        </tr>
                                        <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>Faire des recherches sur internet</p><br></br></td>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>Utiliser les services publics en ligne (CPAM, pole Emploi...)</p></td>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>Envoyer un email</p><br></br></td>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>Faire un achat en ligne</p><br></br></td>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>Suivre mes comptes bancaires en ligne</p></td>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>Je ne sais pas faire les actions ci-dessus</p></td>
                                        </tr>
                                        <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                            <th scope="row" rowSpan="2" style={{ backgroundImage: "linear-gradient(to left, #5499C7 2%, #21618C)", width: "8%", textAlign: "center" }}>7</th>
                                            <td style={{ backgroundColor: "#A9CCE3" }} colSpan="6">Quand vous utilisez un outil numerique, le faites vous</td>
                                        </tr>
                                        <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>Seul, de façon autonome</p></td>
                                            <td colSpan="5"><input type="checkbox"></input> <p style={{ marginTop: -20, marginLeft: 17 }}>accompagné (enfants, conjoints, amis, associations, aidants ...)</p></td>
                                        </tr>
                                        <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                            <th scope="row" rowSpan="2" style={{ backgroundImage: "linear-gradient(to left, #5499C7 2%, #21618C)", width: "8%", textAlign: "center" }}>8</th>
                                            <td style={{ backgroundColor: "#A9CCE3" }} colSpan="6">Usages-Qu'aimeriez-vous faire sur internet et que vous ne savez pas faire aujourd'hui ?</td>
                                        </tr>
                                        <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                            <td colSpan="6"><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>(champs libre)</p></td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                    </tfoot>
                                </table>
                                {/* deuxieme page */}
                            </div>
                        </a>
                    </li>

                    
                    <li class="page-item" >
                        <a class="page-link" href="#">
                            <h3 id="part2">Questionnaire 2</h3>
                            <div className="container d-flex">
                                <table className="table table-hover table-bordered align-middle ">
                                    <caption ><p style={{ textAlign: "center" }}>Institut Français de l'Intelligence Artificielle et de la Génétique - IFIAG <br />
                                        88, avenue des Ternes 75017 PARIS - Tél 01 41 34 38 25 - Site www.ifiag.org <br />
                                        SIREN 884 158 072 - RNA W751253501 - APE 8559B</p>
                                    </caption>
                                    <thead>
                                    </thead>
                                    <tbody>
                                        <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                            <th scope="row" rowSpan="2" style={{ backgroundImage: "linear-gradient(to left, #5499C7 2%, #21618C)", width: "8%", textAlign: "center" }}>9</th>
                                            <td style={{ backgroundColor: "#A9CCE3" }} colSpan="6">Parmi les éléments suivants, quel est celui qui vous paraît être aujourd'hui le principal frein à l'utilisation d'internet ?</td>
                                        </tr>
                                        <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                            <td ><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>Trop compliqué à utiliser</p><br></br><br></br><br></br></td>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>La qualité de service-le temps de reponse, les interruptions-n'est pas satisfaisante</p></td>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>les données personnelles ne sont pas suffisamment protégées sur internet</p><br></br></td>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>cela revient trop cher</p><br></br><br></br></td>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>Internet n'est pas utile pour la vie quotidienne</p><br></br><br></br></td>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>Le service après vente et l'assistance ne sont pas satisfaisants</p><br></br></td>
                                        </tr>
                                        <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                            <th scope="row" rowSpan="2" style={{ backgroundImage: "linear-gradient(to left, #5499C7 2%, #21618C)", width: "8%", textAlign: "center" }}>10</th>
                                            <td style={{ backgroundColor: "#A9CCE3" }} colSpan="6">Aujourd'hui, lorsque vous devez accomplir vos démarches en ligne, êtes-vous plutôt :</td>
                                        </tr>
                                        <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>Très inquiet</p><br></br></td>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>assez inquiet</p><br></br></td>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>peu inquiet</p><br></br></td>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>pas du tout inquiet</p></td>
                                            <td colSpan="2"><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>ne sait pas</p><br></br></td>
                                        </tr>
                                        <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                            <th scope="row" rowSpan="2" style={{ backgroundImage: "linear-gradient(to left, #5499C7 2%, #21618C)", width: "8%", textAlign: "center" }}>11</th>
                                            <td style={{ backgroundColor: "#A9CCE3" }} colSpan="6">Aujourd'hui, lorsque vous devez accomplir vos démarches en ligne, êtes-vous plutôt:</td>
                                        </tr>
                                        <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>Vous ne vous sentez pas suffisamment à l'aise, en général, avec un ordinateur ou internet ?</p><br></br></td>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>Vous ne vous sentez pas suffisamment à l'aise avec les sites administratifs en particulier</p><br></br></td>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>Vous n'avez pas suffisamment confiance dans la sécurité des données sur internet</p><br></br></td>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>Vous n'avez pas facilement accès à internet</p><br></br><br></br></td>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>Vous ne savez pas vraiment comment archiver et archiver et conserver des informatons dans le temps avec les les démarches en ligne</p></td>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>Toutes les démarches administratives vous inquiètent, quelle que soit la façon dont vous le faîtes</p><br></br></td>
                                        </tr>
                                        <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                            <th scope="row" rowSpan="2" style={{ backgroundImage: "linear-gradient(to left, #5499C7 2%, #21618C)", width: "8%", textAlign: "center" }}>12</th>
                                            <td style={{ backgroundColor: "#A9CCE3" }} colSpan="6">Connaissez-vous l'IFIAG ?</td>
                                        </tr>
                                        <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                            <td><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>OUI</p></td>
                                            <td colSpan="5"><input type="checkbox"></input><p style={{ marginTop: -20, marginLeft: 17 }}>NON</p></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </a>
                    </li>
                    
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
            {/* fin */}




        </Styles>
    )
}
export default Home;
