import React from "react";

import './Tittles.scss'

const Tittle = (props) => {

    return(
        <div className="tittle">
            <h1>{props.titulo}</h1>
            <hr/>
        </div>
    )
}

export default Tittle;