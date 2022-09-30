import React from "react";
import "menu.css"
import {frenchToast,pancakes,waffles} from '../data';




export default function MenuItem() {
    const menuWaffle = waffles.map((waffle)=>
    <div>
    <h2>{waffle.name}</h2>
    <p>{waffle.description}</p>
    <b>{waffle.price}</b>
    </div>
    

    ); 

    const menuPancake = pancakes.map((pancake)=>
    <div>
        <h2>{pancake.name}</h2>
        <p>{pancake.description}</p>
        <b>{pancake.price}</b>
    </div>
    );

    const menuFrenchToast = frenchToast.map((frenchtoast)=>
    <div>
        <h2>{frenchtoast.name}</h2>
        <p>{frenchtoast.description}</p>
        <b>{frenchtoast.price}</b>
    </div>
    );







    return (
        <>
        <h1>Menu</h1>
        
      
      
        </>
     

    );    
}