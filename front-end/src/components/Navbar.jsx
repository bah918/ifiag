//import React, {useEffect, useState} from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Home from "../views/Home";
import Contact from "../views/Contact";
import Login from "../views/Login";
import Signup from "../views/Signup";
import Profil from "../views/Profil";

function Navbar() {
    return (
        <BrowserRouter>
            <nav className="navbar sticky-top navbar-expand-lg navbar-white bg-white">
                <div  style={{backgroundImage: "linear-gradient(to bottom, #ffffff 2%, #D6EAF8)"}} className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img style={{ width: "25%", marginRight: 623}}
                            src="./img/IFIAG - 5a - 30.10.2019 - LOGO.jpg"
                            alt="ifiag"
                        />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                                <>
                                    <li className="nav-item">
                                        <Link to="/Signup" className={`nav-link`} style={{color:'#2E86C1', fontWeight: "bolder"}}>
                                            Inscription
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/login" className={`nav-link`}style={{color:'#2E86C1', fontWeight: "bolder"}}>
                                            Connection
                                        </Link>
                                    </li>
                                </>
                            
                                <>
                                    <li className="nav-item">
                                        <Link
                                            to="/login"
                                            onClick={() => {
                                                return localStorage.removeItem("token");
                                            }}
                                            className={`nav-link`} style={{color:'#2E86C1', fontWeight: "bolder"}} >
                                            Déconnexion
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/profile" className={`nav-link`} 
                                        style={{color:'#2E86C1', fontWeight: "bolder"}}>
                                            Profil
                                        </Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link to="/contact" className={`nav-link`}
                                        style={{color:'#2E86C1', fontWeight: "bolder"}}>
                                            Contact
                                        </Link>
                                    </li>
                                </>
                        
                        </ul>
                    </div>
                </div>
            </nav>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/profile" component={Profil} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navbar;