import Header from './components/Header';
import Home from './pages/Home'
import './App.css';
import {BrowserRouter as Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ChildHeader from './components/ChildHeader';
import Datas from "./data"
import Slider from './components/slider';
import Card from "./components/Card"
import Store from './pages/Store';
import { useState } from 'react';
import Data from './data1';
import Data2 from './data2';
import Data3 from "./data2"
import Signup from './routePages/Signup'; 





function App() {

  const[stores,setstore]=useState(Datas);
  const[Stores1,setstore1]=useState(Data);
  const[Stores2,setstores2]=useState(Data2);
  const[Stores3,setstores3]=useState(Data3);
  
  return (
    <div className="App">
      
     
      
      <Routes>  

      <Header/>
      <ChildHeader/>
      <Slider/>
      <Card Datas={Datas}/>
      <Store stores={stores} Stores1={Stores1} Stores2={Stores2} Stores3={Stores3} setstore={setstore}/>
      
         <Route path="/home" element={<Home/>}/>
         <Route path="/Signup" element={<Signup/>} />
   
         


      </Routes>

      
    </div>
  );
}

export default App;
