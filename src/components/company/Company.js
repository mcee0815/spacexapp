import React, { useState,useEffect } from  'react'
import ClipLoader from "react-spinners/ClipLoader";
import MoonLoader from "react-spinners/MoonLoader";
import './style.css';

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
      <div className='wrapper'>
      {
        spin ? <p style={{textAlign:'center'}}><ClipLoader/></p> :
        <div>
        
        <h1>{company.name}</h1>
        <div className='ceo'>
          <h3>Ceo:</h3>
          <h3>{company.ceo}</h3>
        </div>
        <img className="elon" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/B4EC/production/_116361364_tes1.png" alt="elon"/>
        <div className='summary'>
          <p>{company.summary}</p>
        </div>
      </div>
        
      }
      </div>
    );
}

export default Company;
