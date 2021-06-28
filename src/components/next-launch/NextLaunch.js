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
  <div style={{backgroundImage:"url('https://cdn.eso.org/images/screen/eso1132e.jpg')"}} className='launchWrapper'>
    <h2 className='nextLaunchH2'>Next Launch</h2>
    
      {
        spin ? <p style={{textAlign:'center'}}><ClipLoader/></p> :
        <div>
            <h3>{launch.name}</h3>
            <h3>Flight Number {launch.flightNumber}</h3> 
            <h4><span></span></h4>
            <h3>Launch Date:</h3>
            <p style={{textAlign:'center'}}> {launch.launchDate}</p>
        </div>
      }
  </div>
  );
}

export default NextLaunch;
