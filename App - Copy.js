    import React from "react";
    // import Mando from "./Mando";
    // import Yadda from "./Yadda";

    function App(){
        const ds={
            margin:'15px',
            color: 'rgb(75 255 255)',
            border: '2px solid red',
            backgroundColor: 'cadetblue',
            textAlign: 'center',
            borderRadius: '12px'
        }
    
        const fs={
           border: '2px solid grey',
            margin: '10px 15px',
            fontSize: '19px',
            color: 'rgb(118, 31, 231)',
            cursor: 'pointer',
            textDecoration: 'underline',
            marginLeft: '250px',
            marginRight:' 1000px',
            marginTop: '50px',
            textAlign: 'center',
            borderRadius: '15px',
            padding: '5px'
        }
        const tt = new Date().toLocaleDateString();
        const rt = new Date().toLocaleTimeString();
    
        let you = new Date(2021,3,19,8);
        you = you.getHours();
        
        let op='';
    
        const design={ };
    
        if(you>=1 && you<12){
            op="Good Morning Sonu  Bhai...";
            design.color='#95ff95';
        }
        else if(you>=12 && you<19){
            op="Good Afternoon Sonu Bhai...";
            design.color='#ffbb61';
        }
        else{
            op="Good Night Sonu Bhai...";
            design.color='violet';
        }


        return(
            <>
    <h1 style={ds}> Breaking Bad </h1>
    <p style={fs} id="dk"> D.G.Ruparel gendu collage</p>
    <div>
        <p className="inter">Current Date is ={tt}</p>
        <p className="inter">Current Time is ={rt}</p>
        
        <p id="tycs"> <span id="hp">Hello,</span><span style={design}>{op}</span></p>
        
        </div>
    </>
    );

        
}
export default App;

