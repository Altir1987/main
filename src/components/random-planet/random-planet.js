import React, {Component, Fragment} from 'react';
import SwapiService from "../../swapi-service/swapi-service";
import Spinner from "../spinner/spinner";
import './random-planet.css';
import ErrorIndicator from "../error-indicator/error-indicator";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService()
  state = {
    planet: {},
    loading: true,
    error: false,
  }

  constructor() {
    super();
    this.updatePlanet()
    this.interval = setInterval(this.updatePlanet, 2500);
    //clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({planet, loading: false,})
  };

  onError = (err) => {
    this.setState({
        error: true,
        loading: false
      }
    )
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 20) + 1;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    const {planet, loading, error} = this.state

    const hasData = !(loading || error); //если нет загрузки и ошибки
    const errorMessage = error ? <ErrorIndicator/> : null; // вывести сообщение об ошт+ибке загрузки данных
    const spinner = loading ? <Spinner/> : null; // отобразить спиннер загрузки если идет загрузка данных с сервера
    const content = hasData ? <PlanetView planet={planet}/> : null; //отобразить контент когда все загрузится и нет ошибок

    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const PlanetView = ({planet}) => {
  const {id, name, population, rotationPeriod, diameter} = planet;
  console.log(planet);
  return (
    <Fragment>
      <img className="planet-image"
           src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </Fragment>

  )

}
