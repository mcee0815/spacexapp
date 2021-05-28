import React from  'react'
import Company from './components/company/Company';
import './App.css';
import NextLaunch from './components/next-launch/NextLaunch';

 const App = () => {
    

  return (
    <div className="App">
      <Company />
      <hr/>
      <NextLaunch />
    </div>
  );
}

export default App;
