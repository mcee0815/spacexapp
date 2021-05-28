import React, { useState,useEffect } from  'react'

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
    <div className="App">
      
      <h3>Company:{company.name}</h3>
      <h3>Ceo:{company.ceo}</h3>
      <p>{company.summary}</p>
      
  
    </div>
  );
}

export default Company;
