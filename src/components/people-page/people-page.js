import React, {Component} from 'react';

import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import ErrorIndicator from '../error-indicator/error-indicator';
import ErrorBoundry from "../ErroBoundry/error-boundry";
import Row from "../row/row";
import "./paople-page.css"
import SwapiService from "../../swapi-service/swapi-service";




export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
    selectedPlanet: null,
  };



  onPersonSelected = (selectedPerson) => {
    this.setState({selectedPerson});
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator/>;
    }
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}>
      {(item) => item.name}
      </ItemList>
  );
    const personDetails = (
      <ItemDetails personId={this.state.selectedPerson}/>
    )

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails}/>
      </ErrorBoundry>

    );
  }
}
