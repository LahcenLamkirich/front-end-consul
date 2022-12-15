import React from "react";
import back from './back.png';

export default function Home(){
    return (
        <div className="Home">
            <img src={back} style={{
                width: "40%", 
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                height:"60%" 
            }} alt="backgroundImage" />
        </div>
    )
}
