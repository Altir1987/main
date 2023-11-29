import {SwapiServiceConsumer} from "../swapi-contex/swapi-context";
import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import React from "react";
import {withSwapiService} from "../hoc-helpers";
import WithSwapiService from "../hoc-helpers/with-swapi-service";

const PersonDetails = ({itemId,swapiService}) => {
  const {getPerson, getPersonImage} = swapiService

  return(
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}>
      <Record field="gender" label="Gender"/>
      <Record field="eyeColor" label="Eye Color"/>
    </ItemDetails>
    )
};
export default WithSwapiService(PersonDetails)
