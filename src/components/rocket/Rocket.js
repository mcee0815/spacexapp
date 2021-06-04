import React, { useState,useEffect } from  'react'
import ClipLoader from "react-spinners/ClipLoader";
// import MoonLoader from "react-spinners/MoonLoader";

const  getRockets = async () => {
    let data = await fetch("https://api.spacexdata.com/v4/rockets")
    return data.json()
}

const Rockets = () => {
    const [myRockets,setState] = useState([])
    const [spin,setSpinner] = useState(true)

    useEffect(  () => {
          getRockets()
          .then(rockets => {
              
            if (rockets !== null){
                setTimeout(() => {
                    setSpinner(false)
                },1000)   
            }
                console.log(rockets)
              setState(rockets)
            })
          
    },[])
  return (
      
    <div style={{display:'flex',flexWrap:'wrap'}}>
        {
                spin ? <ClipLoader /> :
                    myRockets.map((rocket,id) => {
                    return (
                        <div style={{width:400,background:"gray",color:"white",padding:10,margin:5}}>
                            <p key={id}>{rocket.first_flight}</p>
                            <p key={id}>{rocket.name}</p>
                            <p key={id}>{rocket.description}</p>
                            
                            
                        </div>
                    ) 
                })
        }
    </div>
  );
  
}

export default Rockets;
