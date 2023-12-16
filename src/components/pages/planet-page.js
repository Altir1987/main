import {PlanetDetails, PlanetList} from "../sw-components";
import Row from "../row/row";
import React, {Component} from "react";

export default class PlanetPage extends Component {
  state = {
   selectedItem: 1
  }
  onItemSelected = (selectedItem)=> {
    this.setState({selectedItem})
  }
  render() {
    const {selectedItem}=this.state
    return(
      <Row
        left={<PlanetDetails itemId={selectedItem}/>}
        right={<PlanetList onItemSelected={this.onItemSelected}/>}
      />

    )
  }
}




