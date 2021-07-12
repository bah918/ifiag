import React from 'react';
//import {Link} from "react-router-dom";
import { Styles } from '../components/styles';

function Formations(){
    return (
        <Styles>
            <div>
              <div className="container">
                <div id="part1" className="table-responsive">
                  <h2>Inscription aux différentes formations</h2>
                  <div className="container d-flex">
                      <table className="table table-hover table-bordered align-middle ">
                         <thead style={{ backgroundColor: 'gold' }}>

                         </thead>
                         <tbody>
                            <tr>
                                <th>Le Numerique</th>
                                <th>HTML et ChatBot</th>
                                <th>IA, Deep Learning</th>
                                <th>Mongodb ElasticStack</th>
                            </tr>
                             
                             {/* <tr>
                                 <th scope="row" rowSpan="2" style={{ backgroundImage: "linear-gradient(to left, #5499C7 2%, #21618C)", width: "2%", textAlign: "center", color: 'black' }}>HTML et ChatBot</th>
                             </tr>
                             <tr>
                                 <th scope="row" rowSpan="2" style={{ backgroundImage: "linear-gradient(to left, #5499C7 2%, #21618C)", width: "2%", textAlign: "center", color: 'black' }}>HTML et ChatBot</th>
                             </tr> */}
                      
                         </tbody>
                      </table>
                  </div>
                      
                
                </div>
              </div>

            
            </div>
        </Styles>
    )
}
export default Formations;
