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
    // {box-sizing: border-box;
        // display: grid;
        // grid-template-columns: repeat(auto-fill,minmax(144px, 1fr));}
  return (
      
    <div style={{width:'100%',display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
    
        {
                    myRockets.map((rocket,id) => {
                     return   spin ? 
                        <div style={{boxSizing:'border-box', height:400,width:400,background:"gray",color:"white",padding:10,margin:5,display:'grid'}}>
                            <p style={{margin:'auto'}}>
                                <ClipLoader />
                            </p> 
                        </div> 
                     :
                        <div key={id} style={{boxSizing:'border-box',fontSize:'larger',width:350,background:"#502050",color:"white",padding:10,margin:10}}>
                            <h2 style={{marginBottom:5,color:'white',textAlign:'left',marginLeft:10}}>{rocket.name}</h2>
                            <img style={{width:'100%',maxHeight:200,height:'fitContent'}} src={rocket.flickr_images[0]}/>
                            <p style={{paddingTop:7}}>First Flight: {rocket.first_flight}</p>
                            <p>{rocket.description}</p>
                            <a style={{textDecoration:'none',textAlign:'center',boxSizing:'border-box',fontSize:'small',display:'block',width:50,height:35,boxShadow:'4px 4px darkgrey',background:'white',marginBottom:20,padding:10,}} href='spacex.com'>More</a>
                        </div>
                    
                })
        }
    </div>
  );
  
}

export default Rockets;
