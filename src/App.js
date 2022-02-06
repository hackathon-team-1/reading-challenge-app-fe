import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
// import { UserChallengePage } from "./components/UserChallengePage";
// import { LoginModal } from "./components/LoginModal";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar/>
        <Home/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/reading-challenge-app-fe/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App






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
