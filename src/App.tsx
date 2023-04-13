import React from 'react';
import logo from './logo.svg';
import './App.css';
import Seeder from './stories/molecules/Seeder/Seeder';
import NewCashKick from './stories/Pages/NewCashKick';
import CashAccleration from './stories/Pages/CashAccleration';
import HomePage from './stories/Pages/HomePage/HomePage';





function App() {
  return (
    <div>
      <NewCashKick/> 
       <CashAccleration/>
      <HomePage/>
    </div>
  );
}


export default App;
