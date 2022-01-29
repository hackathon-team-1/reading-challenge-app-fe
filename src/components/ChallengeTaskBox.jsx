import React from 'react';
import { Card, InputGroup, FormControl, Button } from 'react-bootstrap';

const ChallengeTaskBox = (props) => {
  return (
    <>
      <Card border="secondary" key={"task"+props.task[1]}>
        <Card.Header>{props.task[0]}</Card.Header>
        <Card.Body>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Add a book to complete this challenge task"
              aria-label="Add a book to complete this challenge task"
              aria-describedby="task-input-box"
            />
            <Button variant="outline-secondary" id={"btn-task-"+props.task[1] }>
              Mark Completed
            </Button>
          </InputGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default ChallengeTaskBox;

