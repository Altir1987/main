import React from "react";
import ItemList from "../item-list";
import {withData} from "../hoc-helpers"
import SwapiService from "../../swapi-service/swapi-service";
import itemList from "../item-list";

const swapiService = new SwapiService()
const {
  getAllPeople,
  getAllStarships,
  getAllPlanets,
} = swapiService

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

const PersonList = withData(withChildFunction(itemList, renderName), getAllPeople);
const PlanetList = withData(withChildFunction(itemList, renderName), getAllPlanets);
const StarshipList = withData(withChildFunction(itemList, renderModelandName), getAllStarships);

export {
  PersonList,
  StarshipList,
  PlanetList
}
