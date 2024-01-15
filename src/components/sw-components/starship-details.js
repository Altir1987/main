import React from "react";
import ItemDetails from "../item-details";
import { Record } from "../item-details/item-details";
import { withSwapiService } from "../hoc-helpers";
import { useParams } from "react-router-dom";

const StarshipDetails = ({ getData, getImageUrl }) => {
  const { id } = useParams();

  return (
    <ItemDetails
      itemId={id}
      getData={getData}
      getImageUrl={getImageUrl}
    >
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage,
  };
};

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
