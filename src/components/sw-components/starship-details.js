
import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import React from "react";
import {withSwapiService} from "../hoc-helpers";


const StarshipDetails = ({itemId,swapiService}) => {
          const {getStarship,getStarshipImage}=swapiService
          return (
            <ItemDetails
              itemId={itemId}
              getData={getStarship}
              getImageUrl={getStarshipImage}>

              <Record field="model" label="Model"/>
              <Record field="length" label="Length"/>
              <Record field="costInCredits" label="Cost"/>
            </ItemDetails>
          )

};


export default withSwapiService(StarshipDetails)