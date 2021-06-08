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
      
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
        {
                
                    myRockets.map((rocket,id) => {
                     return   spin ? 
                        <div style={{width:400,height:400,background:"gray",color:"white",padding:10,margin:5,display:'grid'}}>
                            <p style={{margin:'auto'}}>
                                <ClipLoader />
                            </p> 
                        </div> 
                     :
                        <div key={id} style={{width:350,background:"gray",color:"white",padding:10,margin:10}}>
                            <img style={{width:'100%',maxHeight:215,height:'fitContent'}} src={rocket.flickr_images[0]}/>
                            <h3>{rocket.name}</h3>
                            <p>First Flight: {rocket.first_flight}</p>
                            <p>{rocket.description}</p>
                        </div>
                    
                })
        }
    </div>
  );
  
}

export default Rockets;
