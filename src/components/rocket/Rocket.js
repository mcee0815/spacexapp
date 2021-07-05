import React, { useState,useEffect } from  'react'
import ClipLoader from "react-spinners/ClipLoader";
import rocketCss from './rocket.css';

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
      
    <div classname='rocketCss'  style={{width:'100%',display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',backgroundImage: 'url(https://cdn.eso.org/images/screen/eso1132e.jpg)'}}>
        
                
        {
                    myRockets.map((rocket,id) => {
                     return   spin ? 
                        <div key={id} style={{boxSizing:'border-box', height:400,width:400,background:"gray",color:"white",padding:10,margin:5,display:'grid'}}>
                            <p style={{margin:'auto'}}>
                                <ClipLoader />
                            </p> 
                        </div> 
                     :
                        <div key={id} style={{boxSizing:'border-box',fontSize:'large',width:350,background:"#502050",color:"white",padding:10,margin:10}}>
                            <h3 style={{marginBottom:10,color:'white',textAlign:'left',marginLeft:10}}>{rocket.name}</h3>
                            <img style={{width:'100%',maxHeight:200,height:'fitContent'}} src={rocket.flickr_images[0]} alt="rocket pic"/>
                            <p style={{paddingTop:7}}>First Flight: {rocket.first_flight}</p>
                            <p>{rocket.description}</p>
                            <a style={{textDecoration:'none',textAlign:'center',boxSizing:'border-box',fontSize:'small',display:'block',width:50,height:35,boxShadow:'4px 4px darkgrey',background:'white',marginBottom:20,padding:10,}} href={`https://en.wikipedia.org/wiki/${rocket.name}`}>More</a>
                        </div>
                    
                })
        }
    </div>
  );
  
}

export default Rockets;
