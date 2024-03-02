import React from "react";
// import vijay from "./Sq";
import vijay ,{avtar,dd,mn} from "./Sq";


function Circle(){
    return (
    <>
    <h1>Shelby Family</h1>
    <ol>
        <li>Thomas Shelby</li>
        <li>Author Shelby</li>
        <li>John Shelby</li>
    </ol>
    <h1>Heist Family</h1>
    <ul>
        <li>{vijay}</li>
        <li>{avtar}</li>
        <li>{dd}</li>
        <li>{mn}</li>
    </ul>
    </>
    );
}
export default Circle;