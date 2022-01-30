import React from "react";
import { Container } from "react-bootstrap";
import ChallengeTaskBox from "./ChallengeTaskBox";

const UserTaskList = ({
  userProgress,
  updateUserProgress,
}) => {
  return (
    <Container>
      <br />
      {userProgress.map((task) => (
        <>
          <ChallengeTaskBox
            bookInput={task.bookInput}
            task={task.taskName}
            taskId={task.taskId}
            key={task.taskId}
            isComplete={task.isComplete}
            updateUserProgress={updateUserProgress}
          />
          <br />
        </>
      ))}
    </Container>
  );
};

export default UserTaskList;
