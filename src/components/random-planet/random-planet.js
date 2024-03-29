import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../swapi-service/swapi-service';

import './random-planet.css';

const RandomPlanet = ({ updateInterval = 10000 }) => {
  const [planet, setPlanet] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const swapiService = new SwapiService();

  useEffect(() => {
    const updatePlanet = () => {
      const id = Math.floor(Math.random() * 17) + 2;
      swapiService
        .getPlanet(id)
        .then((planet) => {
          setPlanet(planet);
          setLoading(false);
          setError(false);
        })
        .catch((err) => {
          setError(true);
          setLoading(false);
        });
    };

    updatePlanet(); // вызываем первый раз

    const intervalId = setInterval(updatePlanet, updateInterval);

    return () => clearInterval(intervalId); // очищаем интервал при размонтировании компонента
  }, [updateInterval]);

  const hasData = !(loading || error);

  const errorMessage = error ? <ErrorIndicator /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = hasData ? <PlanetView planet={planet} /> : null;

  return (
    <div className="random-planet jumbotron rounded">
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
};

RandomPlanet.propTypes = {
  updateInterval: PropTypes.number,
};

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt="planet"
      />
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
    </>
  );
};

export default RandomPlanet;
