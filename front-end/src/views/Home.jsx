import React from 'react';
//import {Link} from "react-router-dom";
import { Styles } from '../components/Styles';

function Home(){
    return (
        <Styles>
            <div className="container">
            <div className="table-responsive">
                <h2>Le questionnaire (1/2)</h2>
                    <br></br>
                <div className="container d-flex">
                    <table className="table table-hover table-bordered align-middle ">
                                    <caption ><p style={{textAlign:"center"}}>Institut Français de l'Intelligence Artificielle et de la Génétique - IFIAG <br/>
                                    88, avenue des Ternes 75017 PARIS - Tél 01 41 34 38 25 - Site www.ifiag.org <br/>
                                    SIREN 884 158 072 - RNA W751253501 - APE 8559B</p></caption>
                        <thead style={{ ackgroundColor: "gold" }}>
                            {/*<tr style={{ textAlign:"Left", fontSize:"12px", fontWeight:"bolder" }}>
                                <th scope="col">1</th>
                                <th scope="col">je</th>
                                <th scope="col">je</th>
                                <th scope="col">je</th> 
                                <th scope="col">je</th>
                                <th scope="col">je</th>
                            </tr> */}
                        </thead>
                        <tbody>
                            <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                <th scope="row" rowSpan="2" style={{backgroundColor: "#ddac6e", width:"8%",textAlign: "center"}}>1</th>
                                <td style={{backgroundColor: "#00aae1"}} colSpan="6">Je suis</td>
    
                            </tr> 
                            <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                <td ><input type="checkbox"></input>un homme </td>
                                <td colSpan="5"><input type="checkbox"></input>une femme</td>
                            </tr> 
                            <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                <th scope="row" rowSpan="2" style={{backgroundColor: "#ddac6e", width:"8%",textAlign: "center"}}>2</th>
                                <td style={{backgroundColor: "#00aae1"}} colSpan="6">J'ai</td>
                    
                            </tr> 
                            <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                <td><input type="checkbox"></input>moins de 18 ans</td>
                                <td><input type="checkbox"></input>entre 18 et 35 ans</td>
                                <td><input type="checkbox"></input>entre 35 et 50 ans</td>
                                <td><input type="checkbox"></input>entre 50 et 65 ans</td>
                                <td colSpan="2"><input type="checkbox"></input>plus de 65 ans</td>
                            </tr> 
                            <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                <th scope="row" rowSpan="2" style={{backgroundColor: "#ddac6e", width:"8%",textAlign: "center"}}>3</th>
                                <td style={{backgroundColor: "#00aae1"}} colSpan="6">A domicile, je possède</td>
                           
                            </tr> 
                            <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                <td><input type="checkbox"></input> un smartphone</td>
                                <td><input type="checkbox"></input> une tablette</td>
                                <td><input type="checkbox"></input> un ordinateur</td>
                                <td colSpan="3"><input type="checkbox"></input>je n'ai pas d'équipement*</td> 
                            </tr> 
                            <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                <th scope="row" rowSpan="2" style={{backgroundColor: "#ddac6e", width:"8%",textAlign: "center"}}>4</th>
                                <td style={{backgroundColor: "#00aae1"}} colSpan="6">Connexion/a domicile</td>
                            </tr> 
                            <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                <td><input type="checkbox"></input><p>j'ai un accès  internet</p></td>
                                <td><input type="checkbox"></input><p>je n'ai pas d'accès internet</p>car je n'ai pas souscrit d'offre*</td>
                                <td colSpan="4"><input type="checkbox"></input><p>je n'ai pas d'accès internet</p>car mon domicile ne peut pas être relié au réseau</td>
                                
                            </tr> 
                            <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                <th scope="row" rowSpan="2" style={{backgroundColor: "#ddac6e", width:"8%",textAlign: "center"}}>5</th>
                                <td style={{backgroundColor: "#ddac6e"}} colSpan="6">Usages Equipement : je sais</td>
                            </tr> 
                            <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                <td><input type="checkbox"></input><p>allumer et éteindre</p><p>l'ordinateur/Smartphone/tablette</p></td>
                                <td><input type="checkbox"></input><p>me servir d'un clavier et</p><p>d'une souris</p></td>
                                <td><input type="checkbox"></input><p>faire une impression</p><p>scan</p></td>
                                <td><input type="checkbox"></input><p>créer, enregistrer et</p><p>télécharger un document</p></td>
                                <td><input type="checkbox"></input><p>utiliser une clef usb </p></td>
                                <td><input type="checkbox"></input><p>Je ne sais pas faire les</p><p>actions ci-dessus*</p></td>

                            </tr> 
                            <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                <th scope="row" rowSpan="2" style={{backgroundColor: "#ddac6e", width:"8%",textAlign: "center"}}>6</th>
                                <td style={{backgroundColor: "#ddac6e"}} colSpan="6">Usages internet-Je sais</td>
                               
                            </tr> 
                            <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                <td><input type="checkbox"></input><p>Faire des recherches sur</p><p>internet</p></td>
                                <td><input type="checkbox"></input><p>Utiliser les services publics</p><p>en ligne (CPAM, pole</p><p>Emploi...)</p></td>
                                <td><input type="checkbox"></input><p>Envoyer un email</p></td>
                                <td><input type="checkbox"></input><p>Faire un achat en ligne</p></td>
                                <td><input type="checkbox"></input><p>Suivre mes comptes</p><p>bancaires en ligne</p></td>
                                <td><input type="checkbox"></input><p>Je ne sais pas faire les </p><p>actions ci-dessus*</p></td>

                            </tr> 
                            <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                <th scope="row" rowSpan="2" style={{backgroundColor: "#ddac6e", width:"8%",textAlign: "center"}}>7</th>
                                <td style={{backgroundColor: "#ddac6e"}} colSpan="6">Quand vous utiliser un outil numerique, le faites vous</td>
                           
                            </tr> 
                            <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                
                                <td><input type="checkbox"></input><p>Seul, de façon autonome</p></td>
                                <td colSpan="5"><input type="checkbox"></input> <p>accompagné (enfants,</p><p>conjoints, amis,</p><p>associations, aidants ...)*</p></td>
                                
                            </tr> 
                            <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                <th scope="row" rowSpan="2" style={{backgroundColor: "#ddac6e", width:"8%",textAlign: "center"}}>8</th>
                                <td style={{backgroundColor: "khaki"}} colSpan="6">Usages-Qu'aimeriez-vous faire sur internet et que vous ne savez pas faire aujourd'hui ?</td>
    
                            </tr> 
                            <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                <td colSpan="6"><input type="checkbox"></input><p>(champs libre)</p></td>
                                
                            </tr> 
                        </tbody>
                        <tfoot>
                        
                        </tfoot>
                    </table>
                    {/* deuxieme page */}
                    
                </div>
                <h3>Le questionnaire (2/2)</h3>
                       <br></br>
                       
                <div className="container d-flex">
                    <table className="table table-hover table-bordered align-middle ">
                       <caption ><p style={{textAlign:"center"}}>Institut Français de l'Intelligence Artificielle et de la Génétique - IFIAG <br/>
                                    88, avenue des Ternes 75017 PARIS - Tél 01 41 34 38 25 - Site www.ifiag.org <br/>
                                    SIREN 884 158 072 - RNA W751253501 - APE 8559B</p>
                       </caption>   
                      <thead style={{ ackgroundColor: "#ddac6e" }}>

                      </thead>
                      <tbody>
                            <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                <th scope="row" rowSpan="2" style={{backgroundColor: "gold", width:"8%",textAlign: "center"}}>9</th>
                                <td style={{backgroundColor: "khaki"}} colSpan="6">Parmi les éléments suivants, quel est celui qui vous paraît être aujourd'hui le principal frein à l'utilisation d'internet ?</td>
    
                            </tr> 
                            <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                <td ><input type="checkbox"></input><p>Trop compliqué à</p><p>utiliser</p></td>
                                <td><input type="checkbox"></input><p>La qualité de</p><p>service-le temps</p><p>de reponse, les</p><p>interruptions-n'est pas satisfaisante</p></td>
                                <td><input type="checkbox"></input><p>les données personnelles</p><p>ne sont pas suffisamment</p><p>protégées sur internet</p></td>
                                <td><input type="checkbox"></input><p>cela revient trop</p><p>cher</p></td>
                                <td><input type="checkbox"></input><p>Internet n'est pas utile pour</p><p>la vie quotidienne</p></td>
                                <td><input type="checkbox"></input><p>Le service après vente et l'assistance ne sont pas</p><p>satisfaisants</p></td>


                            </tr> 
                            <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                <th scope="row" rowSpan="2" style={{backgroundColor: "gold", width:"8%",textAlign: "center"}}>10</th>
                                <td style={{backgroundColor: "khaki"}} colSpan="6">Aujourd'hui, lorsque vous devez accomplir vos démarches en ligne, êtes-vous plutôt :</td>
                            </tr> 
                            <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                <td><input type="checkbox"></input><p>Très inquiet</p></td>
                                <td><input type="checkbox"></input><p>assez inquiet</p></td>
                                <td><input type="checkbox"></input><p>peu inquiet</p></td>
                                <td><input type="checkbox"></input><p>pas du tout inquiet</p></td>
                                <td colSpan="2"><input type="checkbox"></input><p>ne sait pas</p></td>
                            </tr> 
                            <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                <th scope="row" rowSpan="2" style={{backgroundColor: "gold", width:"8%",textAlign: "center"}}>11</th>
                                <td style={{backgroundColor: "khaki"}} colSpan="6">Aujourd'hui, lorsque vous devez accomplir vos démarches en ligne, êtes-vous plutôt:</td>
                            </tr> 
                            <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                <td><input type="checkbox"></input><p>Vous ne vous sentez pas</p><p>suffisamment à l'aise, en</p><p>général, avec un ordinateur</p><p>ou internet ?</p></td>
                                <td><input type="checkbox"></input><p>Vous ne vous sentez pas</p><p>suffisamment à l'aise avec les</p><p>sites administratifs en </p><p>particulier</p></td>
                                <td><input type="checkbox"></input><p>Vous n'avez pas suffisamment</p><p>confiance dans la sécurité des</p><p>données sur internet</p></td>
                                <td><input type="checkbox"></input><p>Vous n'avez pas facilement</p><p>accès à internet</p></td>
                                <td><input type="checkbox"></input><p>Vous ne savez pas vraiment</p><p>comment archiver et archiver et</p><p>conserver des informatons</p><p>dans le temps avec les</p><p>les démarches en ligne</p></td>
                                <td><input type="checkbox"></input><p>Toutes les démarches administratives</p><p>vous inquiètent,</p><p>quelle que soit la</p><p>façon dont vous le faîtes</p></td>
                            </tr> 
                           
                            <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                <th scope="row" rowSpan="2" style={{backgroundColor: "gold", width:"8%",textAlign: "center"}}>12</th>
                                <td style={{backgroundColor: "khaki"}} colSpan="6"><p>Connaissez-vous l'IFIAG ?</p></td>
                    
                            </tr> 
                            <tr style={{ textAlign: "Left", fontSize: "12px", fontWeight: "bolder" }}>
                                <td><input type="checkbox"></input>OUI</td>
                                <td colSpan="5"><input type="checkbox"></input>NON</td>
                            </tr> 
                      </tbody>


                    </table>
                    
                </div>



            </div>
        </div>

        </Styles>
    )
}
export default Home;