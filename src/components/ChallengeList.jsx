import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import {challengeData} from "../data/challengeData";


const ChallengeList = () => {
    console.log(challengeData[0]);
  return (
    <Container>
      {challengeData.map((challenge) => (
          
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={challenge.challengeImg} />
          <Card.Body>
            <Card.Title>{challenge.challengeName}</Card.Title>
            <Card.Text>
              {challenge.description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default ChallengeList;
