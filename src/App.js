import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { IntlProvider } from "react-intl";
import LoginForm from "./LoginForm";
import RobotList from "./RobotList";
import RobotDetail from "./RobotDetail";
import messagesEn from "./locales/en.json";
import messagesEs from "./locales/es.json";

const language = navigator.language.startsWith("en") ? "en" : "es";

function App() {
  return (
    <IntlProvider locale={language} messages={language === "en" ? messagesEn : messagesEs}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/robots" element={<RobotList />} />
          <Route path="/robots/:robotId" element={<RobotDetail />} />
        </Routes>
      </Router>
    </IntlProvider>
  );
}

export default App;
