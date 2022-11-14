import React from "react"
import "./../App.css"

export default function Navbar(props){
    return(
        <div className="main">
            <img className="main--image" src={`./../images/${props.item.imageUrl}`}/>
            <div className="main--details">
                <div className="headers">
                    <p className="one"> <img className="location--image" src="./../images/location.png"/>{props.location}</p>
                    <p className="two">View on <a href={props.item.googleMapsUrl}>
                        <span className="google">Google Maps</span></a></p>
                </div>
                <h3 className="title">{props.item.title}</h3>
                <p className="dates">{props.item.startDate} - {props.item.endDate}</p>
                <p className="description">{props.item.description}</p>
            </div>
        </div>
    )
}