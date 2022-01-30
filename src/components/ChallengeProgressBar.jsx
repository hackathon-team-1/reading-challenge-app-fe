import React from "react";
import { ProgressBar } from "react-bootstrap";

const ChallengeProgressBar = ({userProgress}) => {

  const blockSize = 100 / userProgress.length;
 
  return (
    <ProgressBar>
      {userProgress.map((task, index) => (
        <ProgressBar
          variant={
            task.isComplete ? "success" : "secondary"
          }
          now={blockSize}
          key={"progress" + index}
          href="#"
        />
      ))}
    </ProgressBar>
  );
};

export default ChallengeProgressBar;

// TO DO:
// Each progress bar link to the relevant challenge task.

// Styling
// Taller progress bar
// Add a border to the individual progress bars
