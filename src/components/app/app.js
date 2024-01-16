import React, { useState } from 'react';
import SwapiService from "../../swapi-service/swapi-service";
import Header from '../header';
import RandomPlanet from '../random-planet';
import { SwapiServiceProvider } from "../swapi-contex/swapi-context";
import OtherService from "../../swapi-service/otherService";
import './app.css';
import ErrorBoundry from "../ErroBoundry/error-boundry";
import {BrowserRouter as Router, Routes, Route, useNavigate, Navigate} from "react-router-dom";
import { StarshipDetails } from "../sw-components";
import StarshipsPage from "../pages/starships-page";
import PlanetPage from "../pages/planet-page";
import PeoplePage from "../pages/people-page";
import SecretPage from "../pages/secret-page";
import LoginPage from "../pages/login-page";


const NotFoundPage=()=><h2>Page not found</h2>
const App = () => {
  const [swapiService, setSwapiService] = useState(new SwapiService());
  const [isLoggedIn, setLoggedIn] = useState(false);

  const onLogin = () => {
    setLoggedIn(true);
  };

  const onServiceChange = () => {
    setSwapiService(prevService => {
      const Service = prevService instanceof SwapiService ? OtherService : SwapiService;
      console.log("Switch to", Service.name);
      return new Service();
    });
  };

  return (
    <ErrorBoundry>
      <SwapiServiceProvider value={swapiService}>
        <Router>
          <div className="stardb-app">
            <Header onServiceChange={onServiceChange}/>
            <RandomPlanet/>
            <Routes>
              <Route path="/" element={<h2>Welcome to StarDB</h2>} />
              <Route path="/people/:id?" element={<PeoplePage />} />
              <Route path="/planets" element={<PlanetPage />} />
              <Route path="/starships" element={<StarshipsPage />} />
              <Route path="/starships/:id" element={<StarshipDetails />} />
              <Route
                path="/login/"
                element={<LoginPage isLoggedIn={isLoggedIn} onLogin={onLogin} />}
              />
              <Route
                path="/secret/"
                element={<SecretPage isLoggedIn={isLoggedIn} />}
              />
              <Route path="/*" element={<Navigate to="/" />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </Router>
      </SwapiServiceProvider>
    </ErrorBoundry>
  );
};

export default App;
