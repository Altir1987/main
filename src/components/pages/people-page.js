import React from "react";
import Row from "../row/row";
import { PersonDetails, PersonList } from "../sw-components";
import { useNavigate, useParams } from "react-router-dom";

const PeoplePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div>
      <h2> People </h2>
      <Row
        left={<PersonList onItemSelected={(itemId) => navigate(`/people/${itemId}`)} />}
        right={<PersonDetails itemId={id} />}
      />
    </div>
  );
};

export default PeoplePage;
