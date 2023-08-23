import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./routes/Login";
import OnboardingModal from "./routes/OnboardingModal";
import UserFeed from "./routes/UserFeed";
function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <div className="App">
      <Routes location={background || location}>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<UserFeed />} />
      </Routes>
      {background && (
        <Routes>
          <Route path="/home/modal" element={<OnboardingModal />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
