import React from "react";
import { Card, Button } from "react-bootstrap";
import "./ChallengeCard.css";

const ChallengeCard = ({challengeName, challengeImg, deadline, description, is_active, registered, link, }) => {

  const displayButtons = (status) => {
    if (is_active === true && localStorage.getItem("token") !== "null") {
      return <Button variant="primary">Join Challenge!</Button>
    }
    if (is_active === false && localStorage.getItem("token") !== "null") {
      return <Button variant="secondary" disabled >Coming Soon!</Button>
    }
    if (localStorage.getItem("token") === "null") {
      return <Button variant="secondary" disabled >Login to join!</Button>
    }
  }
  return (
    <>
      <Card style={{ width: "20rem" }} className="shadow p-2 mb-4 m-2" >
        <Card.Img variant="top" src={challengeImg} />
        <Card.Body>
          <Card.Title>{challengeName}</Card.Title>
          <Card.Text>Deadline: {deadline}</Card.Text>
          <Card.Text>{description}</Card.Text>
          <div>
            {
          displayButtons()
          }
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ChallengeCard;
