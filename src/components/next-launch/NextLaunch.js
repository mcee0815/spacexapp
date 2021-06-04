import React, { useState,useEffect } from  'react'
import ClipLoader from "react-spinners/ClipLoader";

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
        // console.log(data)
      })
    }
    useEffect( () => {
        getNextLaunch()
      
    },[])

  return (
    <div className="App">
      {
        spin ? <ClipLoader/> :
        <div>
            <h3>{launch.name}</h3>
            <h3>flight Number {launch.flightNumber}</h3>
            <h3>Launch Date: {launch.launchDate}</h3>
            <p>{launch.details}</p>
            
        </div>
      }
    </div>
  );
}

export default NextLaunch;
