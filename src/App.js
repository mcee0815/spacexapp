import React from  'react'
import Company from './components/company/Company';
import './App.css';
import NextLaunch from './components/next-launch/NextLaunch';
import Rockets from './components/rocket/Rocket';

 const App = () => {
   
    

  return (
    <div className="">
      <Company />
     
      <NextLaunch />
      
      <Rockets />
    </div>
  );
}

export default App;
