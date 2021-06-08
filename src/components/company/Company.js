import React, { useState,useEffect } from  'react'
import './style.css'


const styles = {
  fontSize:'18',
}

const Company = () => {

    const [company,setState] = useState({})

     const getData = () => {
       fetch("https://api.spacexdata.com/v4/company")
      .then( res => res.json())
      .then(data => {
        setState({
          name:data.name || '***',
          ceo:data.ceo || '***',
          summary:data.summary || '***',
        })
      })
    }
    useEffect( () => {
      getData()
      
    },[])

  return (
    <div className='wrapper'>
    
      <h1>{company.name}</h1>
      <div className='ceo'>
        <h3>Ceo:</h3>
        <h3>{company.ceo}</h3>
      </div>
      
      <div className='summary'>
        <p>{company.summary}</p>
      </div> 
    </div>
  );
}

export default Company;
