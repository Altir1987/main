import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import React from "react";

import WithSwapiService from "../hoc-helpers/with-swapi-service";

const PersonDetails = (props) => {
  return(
    <ItemDetails {...props}>
      <Record field="gender" label="Gender"/>
      <Record field="eyeColor" label="Eye Color"/>
    </ItemDetails>
    )
};
const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  };
};
export default WithSwapiService(mapMethodsToProps)(PersonDetails)

