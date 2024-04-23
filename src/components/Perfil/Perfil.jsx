import React from "react";

import './Perfil.scss'


const Perfil = (props) => {

    return(
        <div className="container-perfil">
            <div className="img-section">
                <img src={props.image}/>
            </div>
            <div className="text-section">
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Perfil;