import React, {Component} from "react";
import "./planet-page.css"
import ItemList from "../item-list";
import SwapiService from "../../swapi-service/swapi-service";
import ErrorIndicator from "../error-indicator/error-indicator";
import PlanetDetails from "../planet-details/planet-details";


export default class PlanetPage extends Component {
  swapiService = new SwapiService()
  state = {
    selectedPlanet: null,
    hasError: false,
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: false,
    })
  }

  onPlanetSelected = (id) => {
    this.setState({
      selectedPlanet: id
    });
  }

  render() {
    if(this.state.hasError){
      return <ErrorIndicator/>
    }
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPlanetSelected} getData={this.swapiService.getAllPlanets}/>
        </div>
        <div className="col-md-6">
          <PlanetDetails planetId={this.state.selectedPlanet}/>
        </div>
      </div>
    );
  }
}
