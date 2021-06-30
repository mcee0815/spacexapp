import React, { useState,useEffect } from  'react'
import ClipLoader from "react-spinners/ClipLoader";
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
        spin ? <p style={{textAlign:'center'}}><ClipLoader/></p> 
        :
      <div style={{backgroundImage:"url('https://cdn.eso.org/images/screen/eso1132e.jpg')"}}>
        <h1>SpaceX</h1>
         
        <p className={'text'}>{company.summary}</p>
      </div>
        
      }
      </div>
    );
}

export default Company;
