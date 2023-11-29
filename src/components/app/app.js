import React, {Component} from 'react';
import ItemList from "../item-list/item-list";
import SwapiService from "../../swapi-service/swapi-service";
import Header from '../header';
import RandomPlanet from '../random-planet';
import errorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
import {SwapiServiceProvider} from "../swapi-contex/swapi-context";
import Row from "../row/row";


import './app.css';
import ErrorBoundry from "../ErroBoundry/error-boundry";
import {PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList} from "../sw-components";


export default class App extends Component {

  swapiSevice = new SwapiService()

  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };


  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;


    return (
      <ErrorBoundry>
         <SwapiServiceProvider value={this.swapiSevice}>
           <div className="stardb-app">
             <Header/>
             <RandomPlanet/>
             <Row
               left={<PersonDetails itemId={11}/>}
               right={<PersonList/>}
             />
             <Row
               left={<PlanetDetails itemId={6}/>}
               right={<PlanetList/>}
             />
             <Row
               left={<StarshipDetails itemId={5}/>}
               right={<StarshipList/>}
             />
           </div>
         </SwapiServiceProvider>



      </ErrorBoundry>
    );
  }
}




