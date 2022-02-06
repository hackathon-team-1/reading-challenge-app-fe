import { React, useState } from "react";
import { Container } from "react-bootstrap";
import ChallengeProgressBar from "./ChallengeProgressBar";
import UserTaskList from "./UserTaskList";
import { bookriot } from "../data/bookriot";

export const UserChallengePage = () => {
  // State for whole user challenge
  const initialUserProgress = bookriot.map((task, index) => {
    return {
      taskName: task,
      taskId: `task${index}`,
      bookInput: {title: "", authors: "", thumbnail: ""},
      isComplete: false,
    };
  });
  const [challengeName, setChallengeName] = useState(
    "Book Riot Read Harder 2022"
  );
  const [deadline, setDeadline] = useState("31/12/2022");
  const [challengeProgress, setChallengeProgress] = useState(0); // Number
  const [userProgress, setUserProgress] = useState(initialUserProgress); // array of objects for each task status

  const updateUserProgress = (taskName, taskId, bookInput, isComplete) => {
    const update = {
      taskName: taskName,
      taskId: taskId,
      bookInput: bookInput,
      isComplete: isComplete,
    };

    setUserProgress((prevState) =>
      prevState.map((obj) => (obj.taskId === taskId ? update : obj))
    );

    let tally = userProgress.filter(obj => obj.isComplete).length;
    if (tally !== challengeProgress) {
      setChallengeProgress(tally);
    } // currently state is 1 delayed.
  };

  return (
    <Container>
      <h1>{challengeName}</h1>
      <p>Deadline: {deadline}</p>
      <p>
        Completed: {challengeProgress}/{initialUserProgress.length}
      </p>
      <ChallengeProgressBar userProgress={userProgress} />
      <UserTaskList
        userProgress={userProgress}
        updateUserProgress={updateUserProgress}
      />
    </Container>
  );
};
