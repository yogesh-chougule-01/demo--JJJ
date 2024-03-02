import React from "react";
import { useState } from "react/cjs/react.development";

const Digital=()=>{
    let ttt=new Date().toLocaleTimeString();

    const[ct,updatetime]=useState(ttt);

    const up=()=>{
        let s1=new Date().toLocaleTimeString();
        updatetime(s1);

        
    }
    //setInterval(up,1000);   // TO DISPAY THE RUNNING TIME // 

    return(
        <>
        <h1>{ct}</h1>
        <button onClick={up}>Click here</button>
        </>
    );
}
export default Digital;