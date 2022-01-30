import React from "react";
import {Card, Button } from "react-bootstrap";
import "./ChallengeCard.css";

const ChallengeCard = ({challengeName, challengeImg, deadline, description, registered, link, }) => {
  return (
    <>
      <Card style={{ width: "20rem" }} className="shadow p-2 mb-4 m-2" >
        <Card.Img variant="top" src={challengeImg} />
        <Card.Body>
          <Card.Title>{challengeName}</Card.Title>
          <Card.Text>Deadline: {deadline}</Card.Text>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Join Challenge!</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ChallengeCard;
