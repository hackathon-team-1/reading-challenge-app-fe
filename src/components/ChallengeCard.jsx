import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./ChallengeCard.css";

const ChallengeCard = ({challengeName, challengeImg, deadline, description, is_active, joined, registered, link, }) => {
  const navigate = useNavigate()
  const viewChallenge = () => {
    navigate("reading-challenge-app-fe/user-challenge")
  }

  const displayButtons = () => {
    if (localStorage.getItem("token") !== "null") {

      if (is_active === true) {
        return <Button variant="primary" title="View Challenge" onClick={viewChallenge}> &#10004;&#65039; Joined!</Button>
      }
      if (is_active === false) {
        return <Button variant="secondary" disabled >Coming Soon!</Button>
      }

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
