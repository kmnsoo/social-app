import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "routes/Profile";
import Navigation from "./Navigation";
function AppRouter({ isLoggedIn }) {
  return (
    <Router>
      {/* 아래 문법은 <Navigation>이 존재하려면 isLoggedIn이 True여야 한다는 의미 */}
      {isLoggedIn && <Navigation />}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </>
        ) : (
          <Route path="/" element={<Auth />} />
        )}
      </Routes>
    </Router>
  );
}

export default AppRouter;
