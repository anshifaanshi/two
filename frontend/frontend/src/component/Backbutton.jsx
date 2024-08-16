import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';

function Backbutton({destination='/'}){
    return(
        <div className="flex">
            <Link to={destination} className="fw-bold">
            <BsArrowLeft className="fw-bold"></BsArrowLeft></Link>
        </div>
    )
}
export default Backbutton;