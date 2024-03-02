import React from "react";

const TVshows = "Breaking bad";
// const TVshows = "Money heist";

const Dar = () =>{
    if (TVshows==="Breaking bad"){
    return(
        <>
            <div className="schreder">
            <p id="hank"> ❤️You are watching breaking bad ❤️</p>
            </div>
        </>
        );
}
else  {
    return(
        <p> You are watching Money heist</p>
    );
}
};
export default Dar;

