import React from 'react';
//import {Link} from "react-router-dom";
import { Styles } from '../components/styles';

function Formations() {
  return (
    <Styles>

      <div className="container">
        
          <h2>Inscription aux différentes formations</h2>
          <table>
            <thead>
              
            </thead>
            <tbody>
              <tr>
                <th></th><th></th><th></th>
              </tr>
            </tbody>
          </table>
          <h4>
              Choisissez votre Formation en cliquant 
             <a href="https://www.ifiag.org/formations-dates/" target="_blank" style={{button:"center"}}> ici</a>

          </h4>
      </div>

    </Styles>
  )
}
export default Formations;
