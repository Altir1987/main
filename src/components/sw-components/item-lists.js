import React from "react";
import {withData, withSwapiService} from "../hoc-helpers"
import itemList from "../item-list";


const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>)
  }
}

const renderName = ({name}) => <span>{name}</span>;
const renderModelandName = ({model, name}) => <span>{name}({model})</span>
const mapPersonMethodsToProps = (swapiService)=>{
  return{
    getData: swapiService.getAllPeople
  }
};
const mapPlanetMethodsToProps = (swapiService)=>{
  return{
    getData: swapiService.getAllPlanets
  }
};
const mapStarshipMethodsToProps = (swapiService)=>{
  return{
    getData: swapiService.getAllStarships
  }
};

const PersonList = withSwapiService(
  withData(withChildFunction(itemList, renderName)),
  mapPersonMethodsToProps);

const PlanetList = withSwapiService(
  withData(withChildFunction(itemList, renderName)),
  mapPlanetMethodsToProps);
const StarshipList = withSwapiService(
  withData(withChildFunction(itemList, renderModelandName)),
  mapStarshipMethodsToProps);

export {
  PersonList,
  StarshipList,
  PlanetList
}
