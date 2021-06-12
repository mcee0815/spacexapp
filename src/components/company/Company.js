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
      <div style={{backgroundImage:"url('https://cdn.eso.org/images/screen/eso1132e.jpg')"}}>
        
        <h1>SpaceX</h1>
        <div className='ceo'>
          <h3>Ceo:</h3>
          <h3>{company.ceo}</h3>
        </div>
        <img className="pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/800px-Elon_Musk_2015.jpg" alt="elon musk"/>

        
        <p className={'text'}>{company.summary}</p>
        
    
      </div>
        
      }
      </div>
    );
}

export default Company;
