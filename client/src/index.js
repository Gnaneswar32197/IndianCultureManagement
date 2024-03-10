import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login';
import Home from './home';
import ChangePassword from './changepassword';
import Myprofile from './Myprofile';
import Diwali from './Diwali1';
import Holi from './Holi';
import Ramzan from './Ramzan';
import Christmas from './Christmas';
import IndianFestivalCalendar from './IndianFestivalCalendar';
import Tajmahal from './tajmahal';
import JamaMasjid from './jamamasjid';
import RedFort from './redfort';
import BasilicaOfBomJesus from './basilica_of_bom_jesus';
import ViewAll from './viewall';
import AP1 from './andhra';
import APP1 from './aruna';
import Bihar1 from './Bihar';
import Assam1 from './Assam';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function Website() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path='/home' element={<Home/>} />
        <Route path='/changepassword' element={<ChangePassword/>} />
        <Route path='/Myprofile' element={<Myprofile/>} />
        <Route path='/Diwali1' element={<Diwali/>} /> 
        <Route path='/Holi' element={<Holi/>} /> 
        <Route path='/Ramzan' element={<Ramzan/>} /> 
        <Route path='/Christmas' element={<Christmas/>}/> 
        <Route path='/IndianFestivalCalendar' element={<IndianFestivalCalendar/>}/> 
        <Route path='/tajmahal' element={<Tajmahal/>}/> 
        <Route path='/jamamasjid' element={<JamaMasjid/>}/> 
        <Route path='/redfort' element={<RedFort/>}/> 
        <Route path='/basilica_of_bom_jesus' element={<BasilicaOfBomJesus/>}/> 
        <Route path='/viewall' element={<ViewAll/>}/> 
        <Route path='/andhra' element={<AP1/>}/> 
        <Route path='/aruna' element={<APP1/>}/>
        <Route path='/Bihar' element={<Bihar1/>}/>
        <Route path='/Assam' element={<Assam1/>}/>
      </Routes>
    </BrowserRouter>
  );
}


ReactDOM.render(<Website/>, document.getElementById('root'));