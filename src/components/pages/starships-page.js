import React,{Component} from "react";
import {StarshipDetails, StarshipList} from "../sw-components";
import Row from "../row/row";

export default class StarshipsPage extends Component {
  state = {
    selectedItem: 3
  }
  onItemSelected = (selectedItem)=> {
    this.setState({selectedItem})
  }
  render() {
    const {selectedItem}=this.state
    return (
      <Row
        left={<StarshipDetails itemId={selectedItem}/>}
        right={<StarshipList onItemSelected={this.onItemSelected}/>}
      />
    );
  }
}
