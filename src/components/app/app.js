import React, {Component} from 'react';
import SwapiService from "../../swapi-service/swapi-service";
import Header from '../header';
import RandomPlanet from '../random-planet';
import {SwapiServiceProvider} from "../swapi-contex/swapi-context";
import OtherService from "../../swapi-service/otherService";

import './app.css';
import ErrorBoundry from "../ErroBoundry/error-boundry";
import {BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import PeoplePageContainer from "../pages/people-page-container";
import PlanetPageContainer from "../pages/planet-page-container";
import StarshipsPageContainer from "../pages/starships-page-container";


export default class App extends Component {
  state = {
    swapiSevice: new SwapiService()
  };
  onServiceChange = () => {
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService ? OtherService : SwapiService;
      console.log("Switch to", Service.name)
      return {
        swapiService: new Service()
      }
    });
  }

  render() {
    return (

      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiSevice}>
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange}/>
              <RandomPlanet/>
              <Routes>
                <Route path="/"
                       element={<h2>Welcome to StarDB</h2>}
                       exact/>
                <Route path="/people" element={<PeoplePageContainer/>}/>
                <Route path="/planets" element={<PlanetPageContainer/>}/>
                <Route path="/starships" element={<StarshipsPageContainer/>}/>
              </Routes>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>


    );
  }
}




