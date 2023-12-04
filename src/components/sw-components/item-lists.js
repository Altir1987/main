import React from "react";
import {withData, withSwapiService} from "../hoc-helpers"
import itemList from "../item-list";
import compose from "../hoc-helpers/compose";
import withChildFunction from "../hoc-helpers/with-child-function";


const renderName = ({name}) => <span>{name}</span>;
const renderModelandName = ({model, name}) => <span>{name}({model})</span>
const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
};
const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
};
const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
};

const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps)
  withData,
  withChildFunction(renderName))
  (itemList);

const PlanetList = compose(
  withSwapiService(mapPlanetMethodsToProps)
  withData,
  withChildFunction(renderName)
  )(itemList);
const StarshipList = compose(
     withSwapiService(mapStarshipMethodsToProps)
     withData,
     withChildFunction(renderModelandName))
     (itemList);

export {
  PersonList,
  StarshipList,
  PlanetList
}
