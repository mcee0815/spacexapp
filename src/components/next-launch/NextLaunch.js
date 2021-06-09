import React, { useState,useEffect } from  'react'
import ClipLoader from "react-spinners/ClipLoader";
import './style.css'

const NextLaunch = () => {

    const [launch,setState] = useState({})
    const [spin,setSpinner] = useState(true)

     const getNextLaunch = () => {
       fetch("https://api.spacexdata.com/v4/launches/next")
      .then( res => res.json())
      .then(data => {
        
        if (data) {
            setTimeout(() => {
              setSpinner(false)
            },600)
          }
        setState({
          flightNumber:data.flight_number || '***',
          launchDate:data.date_utc || '***',
          name:data.name || '***',
          details:data.details || '***'
          
        })
        console.log(data)
      })
    }
    useEffect( () => {
        getNextLaunch()
      
    },[])

  return (
    <div className='wrapper'>
    <h2>Next Launch</h2>
    
      {
        spin ? <p style={{textAlign:'center'}}><ClipLoader/></p> :
        <div>
            <h2>{launch.name}</h2>
            <div className='flight-number'>
                <h3>Flight Number: </h3> 
                <h3>{launch.flightNumber}</h3>
            </div>
            <div className='summary'>
                <h3>Launch Date: {launch.launchDate}</h3>
            </div>
        </div>
      }
    </div>
  );
}

export default NextLaunch;
