import { trueFunc } from "boolbase";
import {React, useState} from "react";
import { Card, Form, InputGroup, FormControl, Button } from "react-bootstrap";

const ChallengeTaskBox = ({
  bookInput,
  task,
  taskId,
  isComplete,
  updateUserProgress,
}) => {
  const [booktitle, setBooktitle] = useState("");
  const [editMode, setEditMode] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    isComplete = !isComplete;
    updateUserProgress(task, taskId, booktitle, isComplete);
    isComplete ? setEditMode(false) : setEditMode(true);
  };

  if (isComplete && editMode === false) {
    return (
      <>
        <Card border="secondary" variant="outline-success">
          <Card.Header>{task}</Card.Header>
          <Card.Body>
            <Card.Text>{bookInput}</Card.Text>
            <Button
              variant="outline-success"
              id={"btn-task-" + taskId}
              onClick={() => setEditMode(true)}
            >
              Edit
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  } else
    return (
      <>
        <Card border="secondary">
          <Card.Header>{task}</Card.Header>
          <Card.Body>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <InputGroup>
              <FormControl
                placeholder={bookInput || "Add a book to complete this challenge task"}
                aria-label="Add a book to complete this challenge task"
                aria-describedby="task-input-box"
                type="text"
                onChange={(e) => setBooktitle(e.target.value)}
              />
              <Button
                variant="outline-success"
                id={"btn-task-" + taskId}
                type="submit"
              >
                Mark Completed
              </Button>
              </InputGroup>
            </Form>
          </Card.Body>
        </Card>
      </>
    );
};

export default ChallengeTaskBox;
