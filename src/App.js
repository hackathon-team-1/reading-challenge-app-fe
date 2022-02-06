import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { UserChallengePage } from "./components/UserChallengePage";

function App() {
  let loggedIn = true;
  return (
    <>
      <NavBar />
      {loggedIn? <UserChallengePage /> : <Home />}
    </>
  );
}

export default App;
