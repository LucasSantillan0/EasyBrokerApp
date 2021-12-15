import React  from "react";

export default function Property({img, title}){

    return<div className="card">
    <h3>{title}</h3>
    <img src= {img}/>
    </div>
}