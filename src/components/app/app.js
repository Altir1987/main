import React, {Component} from 'react';
import SwapiService from "../../swapi-service/swapi-service";
import Header from '../header';
import RandomPlanet from '../random-planet';
import {SwapiServiceProvider} from "../swapi-contex/swapi-context";
import OtherService from "../../swapi-service/otherService";
import './app.css';
import ErrorBoundry from "../ErroBoundry/error-boundry";
import {BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import {StarshipDetails} from "../sw-components";
import StarshipsPage from "../pages/starships-page";
import PlanetPage from "../pages/planet-page";
import PeoplePage from "../pages/people-page";
import SecretPage from "../pages/secret-page";
import LoginPage from "../pages/login-page";



export default class App extends Component {
  state = {
    swapiSevice: new SwapiService(),
    isLoggedIn: false
  };

  onLoggin =()=>{
    this.setState({
      isLoggedIn: true
    });
  };
  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ? OtherService : SwapiService;
      console.log("Switch to", Service.name)
      return {
        swapiService: new Service()
      }
    });
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiSevice}>
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange}/>
              <RandomPlanet/>
              <Routes>
                <Route path="/" element={<h2>Welcome to StarDB</h2>} />
                <Route path="/people/:id?" element={<PeoplePage />} />
                <Route path="/planets" element={<PlanetPage />} />
                <Route path="/starships" element={<StarshipsPage />} />
                <Route path="/starships/:id" element={<StarshipDetails />}/>
                <Route
                  path="/login/"
                  element={<LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLoggin} />}
                />
                <Route
                  path="/secret/"
                  element={<SecretPage isLoggedIn={isLoggedIn} />}
                />
              </Routes>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}



