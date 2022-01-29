import React from "react";
import { Container } from "react-bootstrap";
import ChallengeTaskBox from "./ChallengeTaskBox";

const UserTaskList = (props) => {
  let challengeTasks = [...props.challengeTasks];
  

  return (
    <Container>
      <br />
      {challengeTasks.map((task, key) => (
        <>
          <ChallengeTaskBox task={task} key={key} />
          <br />
        </>
      ))}
    </Container>
  );
};

export default UserTaskList;
