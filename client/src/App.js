import './App.css'
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home/home';
import { NavBar } from './components/navbar/navbar';
import { Mision } from './components/mision/mision';
import { Vision } from './components/vision/vision';
import { Prices } from './components/prices/prices';
import { Events } from './components/events/events';
import { Services } from './components/services/services';
import { Login } from './components/login/login';
 
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Mision' element={<Mision />} />
        <Route exact path='/Vision' element={<Vision />} />
        <Route exact path='/Precios' element={<Prices />} />
        <Route exact path='/Eventos' element={<Events />} />
        <Route exact path='/Servicios' element={<Services />} />
        <Route exact path='/Login' element={<Login />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;