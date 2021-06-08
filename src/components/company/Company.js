import React, { useState,useEffect } from  'react'
<<<<<<< HEAD
import ClipLoader from "react-spinners/ClipLoader";
import MoonLoader from "react-spinners/MoonLoader";
=======
import './style.css'


const styles = {
  fontSize:'18',
}
>>>>>>> company-info

const Company = () => {

    const [company,setState] = useState({})
    const [spin,setSpinner] = useState(true)

     const getData = () => {
       fetch("https://api.spacexdata.com/v4/company")
      .then( res => res.json())
      .then(data => {
        if (data) {
          setTimeout(() => {
            setSpinner(false)
          },600)
        }
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
<<<<<<< HEAD
    <div className="App">
    {
      spin ? <ClipLoader/> :
      <div>
       <h1>{company.name}</h1>
       <h3>Ceo:{company.ceo}</h3>
       <p>{company.summary}</p>
      </div>
      
    }
=======
    <div className='wrapper'>
    
      <h1>{company.name}</h1>
      <div className='ceo'>
        <h3>Ceo:</h3>
        <h3>{company.ceo}</h3>
      </div>
      
      <div className='summary'>
        <p>{company.summary}</p>
      </div> 
>>>>>>> company-info
    </div>
  );
}

export default Company;
