import {React, useState, useEffect} from "react";
import { Card, Form, InputGroup, FormControl, Button } from "react-bootstrap";

const api_key = process.env.REACT_APP_API_KEY;
const searchUrl = `https://www.googleapis.com/books/v1/volumes?q=`;

//const fields = `&fields=items(title,authors, imageLinks/smallThumbnail)`;

const ChallengeTaskBox = ({
  bookInput,
  task,
  taskId,
  isComplete,
  updateUserProgress,
}) => {
  const [input, setInput] = useState("");
  const [editMode, setEditMode] = useState(true);
  const [bookSearch, setBookSearch] = useState([]);
  const [book, setBook] = useState({});

useEffect(() => {
  if (input !== "") {
    googleBookSearch();
  }
}, [input]);

 const googleBookSearch = async() => {
   const response = await fetch(`${searchUrl}${input}&key=${api_key}`);
   const data = await response.json();
   const list = data.items.map((item) => {
      return {
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors,
        thumbnail:
          item.volumeInfo.imageLinks.smallThumbnail ||
          item.volumeInfo.imageLinks.thumbnail ||
          item.volumeInfo.imageLinks === null,
      };
   });
   try {
     setBookSearch(list);
   } catch (error) {
     console.log(error);
   }
 }

  const handleSubmit = (e) => {
    e.preventDefault();
    isComplete = !isComplete;
    updateUserProgress(task, taskId, bookSearch[0], isComplete);
    setInput("");
    isComplete ? setEditMode(false) : setEditMode(true);
  };

  if (isComplete && editMode === false) {
    return (
      <>
        <Card border="success" text="success">
          <Card.Header>COMPLETED: {task}</Card.Header>
          <Card.Body>
            <Card.Img variant="left" src={bookInput.thumbnail} />
            <Card.Text>
              {bookInput.title} by {bookInput.authors[0]}
            </Card.Text>
            <Button
              variant="outline-secondary"
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
                placeholder={bookInput.title || "Add a book to complete this challenge task"}
                aria-label="Add a book to complete this challenge task"
                aria-describedby="task-input-box"
                type="text"
                onChange={(e) => setInput(e.target.value)}

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
