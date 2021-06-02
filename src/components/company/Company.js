import React, { useState,useEffect } from  'react'
import ClipLoader from "react-spinners/ClipLoader";
import MoonLoader from "react-spinners/MoonLoader";

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
    <div className="App">
    {
      spin ? <ClipLoader/> :
      <div>
       <h3>Company:{company.name}</h3>
       <h3>Ceo:{company.ceo}</h3>
       <p>{company.summary}</p>
      </div>
      
    }
    </div>
  );
}

export default Company;
