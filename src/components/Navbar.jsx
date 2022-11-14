import React from "react"
import logo from "./../images/logo.png"
import "./../App.css"

export default function Navbar(){
    return(
        <nav>
            <img className="nav--logo" src={logo}></img>
            <h4 className="nav--title">My Travel Journal !</h4>
        </nav>
    )
}