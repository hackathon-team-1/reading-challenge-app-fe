import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  NavBar from "./components/NavBar";
import Home from "./components/Home";
// import { LoginModal } from "./components/LoginModal";
// import { RegistrationModal } from "./components/RegistrationModal";
import UserChallengePage from "./components/UserChallengePage";

const App = () => {
  return (
      <Router>
        <div>
        <NavBar/>
        <Routes>
          <Route path="" element={<Home/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/user-challenge" element={<UserChallengePage/>}/>

        </Routes>
        </div>
      </Router>
  );
}

export default App;






// function App() {
//   let loggedIn = false;
//   return (
//     <>
//       <NavBar />
//       {loggedIn? <UserChallengePage /> : <Home />}
//     </>
//   );
// }

// export default App;
