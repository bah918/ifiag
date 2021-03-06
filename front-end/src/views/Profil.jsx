import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";
import { Styles } from "../components/styles";
// import Liste from "./Liste";
import { Modal } from 'antd';

const styles = {

  well: {

    width:"500px", 
    height:"300px", 
    marginTop: "30%",
  },

  well1: {
    backgroundImage: "linear-gradient(to bottom, #ffffff 20%, #D6EAF8)", 
    borderRadius : "5px", 
    boxShadow : "0px 8px 16px rgba(0,0,0,.3)", 

  },
};

export default function Profil() {
  const [User, setUser] = useState([]);
  const [image, setImage] = useState({});

  let history = useHistory();


  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:8000/profil", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => response.json())
        .then((response) => {
          setUser(response);
        });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const addImage = () => {
    const formData = new FormData();
    formData.append("image", image);
    fetch("http://localhost:8000/profilPicture", {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
      method: "POST",
      body: formData,
    });
  };
  const addProfilimage = (event) => {
    setImage(event.target.files[0]);
  };
  const refreshProfilPage = () => {
    window.location.reload(false);
  };
  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };

  function info() {
    Modal.info({
      title: 'Vous êtes bien déconnecté',
      content: (
        <div>
          <p>A très bientôt!</p>
        </div>
      ),
      onOk() {},
    });
  }

  return (
    <>
      <Styles>
        <div className="container  mt-5 d-flex justify-content-center liste" >
          <div className="main-body">
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div style={{backgroundImage: "linear-gradient(to bottom, #ffffff 2%, #D6EAF8)"}} className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img src={
                        User.image
                          ? User.image
                          : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                      } alt="Admin" className="rounded-circle" width="150"></img>
                      <div style={{display:"inline",height:"100px", width:"800px"}} className="mt-3">
                        <h4>{User.nom} {User.prénom}</h4>
                        <input style={{marginLeft:"2%"}} id="inputimage" type="file" onChange={addProfilimage} />
                        <br></br>
                        <button style={{marginLeft:"-22%", marginTop:"3%"}} className="btn btn-danger mx-auto"
                          onClick={() => {
                            addImage();
                            refreshProfilPage();
                          }}
                        >
                          Charger une photo
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-8 d-flex justify-content-center align-items-center">
                <div className="card mb-3" style={ styles.well1 }>
                  <div className="card-body" style={ styles.well }>
                    <div className="row" >
                      <div className="col-sm-3">
                        <h6 className="mb-0">Nom</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {`${User.nom}  ${User.prénom}`}
                        
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {User.email}
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">N° Tel</h6>
                      </div>
                      <a href={`tel:${User.numero}`} class="col-sm-9 text-secondary">
                        {User.numero}
                      </a>
                    </div>
                    <div className="row">
                      <div className="col-sm-3 col-lg mx-auto" style={{ textAlign: "center", margin: '21%' }}>
                        {/* <button onClick={logout} class="btn btn-danger mx-auto">Se déconnecter</button> */}
                        <button style={{marginTop:"-15%"}} className="btn btn-danger mx-auto"
                          onClick={() => {
                            info();
                            logout();
                          }}
                        >Se déconnecter
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Liste /> */}
        </div>

      </Styles>
    </>
  );
}
