import React from 'react';
// Router Imports
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Components
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import People from '../Components/People/People';
import Person from '../Components/Person/Person';
import Planets from '../Components/Planets/Planets';
import Planet from '../Components/Planet/Planet';
import Starships from '../Components/Starships/Starships';
import Starship from '../Components/Starship/Starship';
import Films from '../Components/Films/Films';
import Vehicles from '../Components/Vehicles/Vehicles';
import Species from '../Components/Species/Species';
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
