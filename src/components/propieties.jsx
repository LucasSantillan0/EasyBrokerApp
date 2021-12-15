import {React, useEffect, useState} from "react";
import Property from "./property";

export default function Propieties (){
    const [propieties, setPropieties] = useState([{title:"prueba"}])
    const [page,setPage] = useState(1)
    const [loading,setLoading] = useState()

    const getPropieties = ()=>{
    
      fetch(`http://localhost:3001/?page=${page}`)
      .then(response=>response.json())
      .then(json=>{console.log(loading);
          setPropieties(json.content)          
        })
        .then(a=>{setLoading(false)})
    }
    useEffect( ()=>{setLoading(true)
      getPropieties(page);
    },[page])
    
    if(loading)return<div className="spinner"></div>
   
    return<div>

    <button className="button" onClick={e=>{if (page!==1)setPage(page-1)}}>-</button>
    <span className="page">{page}</span>
    <button className="button" onClick={e=>{if (page!==8)setPage(page+1)}}>+</button>

    <section className="cards">
    {propieties.map((data)=><Property 
    title ={data.title} 
    img = {data.title_image_thumb}
    key={data.public_id}
    />)}
    </section>

    </div>
    
}