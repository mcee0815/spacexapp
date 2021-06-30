import React from  'react'
import Company from './components/company/Company';
import './App.css';
import NextLaunch from './components/next-launch/NextLaunch';
import Rockets from './components/rocket/Rocket';

 const App = () => {
   
    

  return (
    <div>
     <Company/>
     <NextLaunch/>
     <h1 style={{fontSize:'2.8em',backgroundImage:'url(https://cdn.eso.org/images/screen/eso1132e.jpg)'}}>Rockets</h1>
     <Rockets/>
     
    </div>
  );
}

export default App;
