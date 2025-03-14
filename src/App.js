import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import RobotList from "./RobotList";
import RobotDetail from "./RobotDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/robots" element={<RobotList />} />
        <Route path="/robots/:robotId" element={<RobotDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
