import React from "react";
import { Card, Button } from "react-bootstrap";
import "./ChallengeCard.css";

const ChallengeCard = ({challengeName, challengeImg, deadline, description, is_active, registered, link, }) => {
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
            is_active === true
            ? <Button variant="primary">Join Challenge!</Button>
            : <Button variant="secondary">Coming Soon!</Button>
          }
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ChallengeCard;
