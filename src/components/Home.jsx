import React from 'react';
import { Container } from 'react-bootstrap';
import ChallengeList from './ChallengeList';
import Hero from './Hero';

const Home = () => {
  return <Container>
  <Hero />
  <ChallengeList />
       
  </Container>;
};

export default Home;
