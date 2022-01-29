import React from "react";
import { ProgressBar } from "react-bootstrap";

const ChallengeProgressBar = (props) => {
  const { challengeTasks } = props;
  const blockSize = 100 / challengeTasks.length;
  let isCompleted = true;
  return (
    <ProgressBar>
      { challengeTasks.map((task, key) =>   (<ProgressBar variant={isCompleted ? "success" : "secondary"} now={blockSize} key={"progress"+key} href="#" />
      ))}
    </ProgressBar>
  );
};

export default ChallengeProgressBar;

// TO DO:
// Take props from the parent component - array representing each challenge task
// Iterate over array to dynamically generate progress bars
// Each progress bar show green if the challenge has been completed, grey if not.
// Each progress bar link to the relevant challenge task.

// Styling
// Taller progress bar
// Add a border to the individual progress bars
