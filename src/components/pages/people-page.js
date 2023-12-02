import React, { Component } from "react";
import Row from "../row/row";
import { PersonDetails, PersonList } from "../sw-components";

export default class PeoplePage extends Component {
  state = {
    selectedItem: null,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;

    // Conditionally render PersonDetails only when a person is selected
    const personDetails = selectedItem ? (
      <PersonDetails itemId={selectedItem} />
    ) : null;

    return (
      <Row
        left={personDetails}
        right={<PersonList onItemSelected={this.onItemSelected} />}
      />
    );
  }
}
