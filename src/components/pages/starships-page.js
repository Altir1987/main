import React from "react";
import { useNavigate } from "react-router-dom";
import { StarshipList } from "../sw-components";

const StarshipsPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Starships </h3>
      <StarshipList onItemSelected={(itemId) => navigate(`/starships/${itemId}`)} />
  </div>)
};

export default StarshipsPage;
