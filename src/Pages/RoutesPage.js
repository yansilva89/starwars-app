import React from 'react';
// Router Imports
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Components
import Header from '../Pages/Header/Header';
import Footer from '../Pages/Footer/Footer';
import People from '../Pages/People/People';
import Person from '../Pages/Person/Person';
import Planets from '../Pages/Planets/Planets';
import Planet from '../Pages/Planet/Planet';
import Starships from '../Pages/Starships/Starships';
import Starship from '../Pages/Starship/Starship';
import Films from '../Pages/Films/Films';
import Vehicles from '../Pages/Vehicles/Vehicles';
import Species from '../Pages/Species/Species';
// Pages
import Home from './Home';

const RoutesPage = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* */}
        <Route path="/people/*" element={<People />}></Route>
        <Route path="/people/person/:id" element={<Person />}></Route>
        {/* */}
        <Route path="/planets/*" element={<Planets />}></Route>
        <Route path="/planets/planet/:id" element={<Planet />}></Route>
        {/* */}
        <Route path="/starships/*" element={<Starships />}></Route>
        <Route path="/starships/starship/:id" element={<Starship />}></Route>
        {/* */}
        <Route path="/films/:id" element={<Films />}></Route>
        {/* */}
        <Route path="/vehicles/:id" element={<Vehicles />}></Route>
        {/* */}
        <Route path="/species/:id" element={<Species />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RoutesPage;
