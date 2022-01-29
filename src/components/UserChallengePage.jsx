import React from 'react';
import { Container } from 'react-bootstrap';
import ChallengeProgressBar from './ChallengeProgressBar';
import UserTaskList from './UserTaskList';
import {bookriot} from '../data/bookriot';


export const UserChallengePage = () => {
    const challengeName = "Book Riot Read Harder 2022";
    const challengeTasks = [...bookriot].map((task, key) => [task, key]);

  return (
    <Container>
      <h1>{challengeName}</h1>
      <p>Deadline: 31/12/22</p>
      <p>Completed: 16/{bookriot.length}</p>
      <ChallengeProgressBar challengeTasks={challengeTasks} />
      <UserTaskList challengeTasks={challengeTasks} />
    </Container>
  );
};
