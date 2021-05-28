import React, { useState,useEffect } from  'react'

const NextLaunch = () => {

    const [launch,setState] = useState({})

     const getNextLaunch = () => {
       fetch("https://api.spacexdata.com/v4/launches/next")
      .then( res => res.json())
      .then(data => {
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
    <div className="App">
        <h3>{launch.name}</h3>
        <h3>flight Number {launch.flightNumber}</h3>
        <h3>Launch Date: {launch.launchDate}</h3>
        <p>{launch.details}</p>
        <hr/>
    </div>
  );
}

export default NextLaunch;
