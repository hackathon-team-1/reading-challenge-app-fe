import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  NavBar from "./components/NavBar";
import Home from "./components/Home";
import  LoginModal  from "./components/LoginModal";
// import { RegistrationModal } from "./components/RegistrationModal";
import UserChallengePage from "./components/UserChallengePage";

const App = () => {
  return (
      <Router>
        <NavBar/>
        <div>
        <Routes>
          <Route path="/user-challenge" element={<UserChallengePage/>}/>
          <Route path="/" element={<Home/>} />
          <Route path="/reading-challenge-app-fe" element={<Home/>} />
        </Routes>
        </div>
      </Router>
  );
}

export default App;