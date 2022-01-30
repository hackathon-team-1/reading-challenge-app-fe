import React from "react";
import { Container } from "react-bootstrap";
import {challengeData} from "../data/challengeData";
import "././ChallengeList.css";
import ChallengeCard from "./ChallengeCard";


const ChallengeList = () => {

  return (
    <Container className="d-flex flex-wrap justify-content-center">
      {challengeData.map((challenge, index) => (
        <ChallengeCard challengeName={challenge.challengeName} challengeImg={challenge.challengeImg} deadline={challenge.deadline} description={challenge.description} registered={challenge.registered} link={challenge.link} key={"challenge"+index}/> 
    ))}
    </Container>
  );
};

export default ChallengeList;
