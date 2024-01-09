import React, {Component} from 'react';
import SwapiService from "../../swapi-service/swapi-service";
import Header from '../header';
import RandomPlanet from '../random-planet';
import {SwapiServiceProvider} from "../swapi-contex/swapi-context";
import OtherService from "../../swapi-service/otherService";
import PeoplePage from "../pages/people-page";
import StarshipsPage from "../pages/starships-page";
import './app.css';
import ErrorBoundry from "../ErroBoundry/error-boundry";
import PlanetPage from "../pages/planet-page";
import {BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom";


export default class App extends Component {
  state = {
    swapiSevice: new SwapiService()
  };
  onServiceChange = () => {
    this.setState(({swapiService})=>{
      const Service = swapiService instanceof SwapiService ? OtherService :SwapiService;
      console.log("Switch to", Service.name)
      return{
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
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />
              <Routes>
                   <Route path="/" element={<h2>Welcome to StarDB</h2>}/>
                   <Route path="/people" element={<PeoplePage/>}/>
                   <Route path="/planets" element={<PlanetPage/>}/>
                   <Route path="/starships" element={<StarshipsPage/>}/>
              </Routes>
            </div>
            </Router>
          </SwapiServiceProvider>
        </ErrorBoundry>


    );
  }
}




