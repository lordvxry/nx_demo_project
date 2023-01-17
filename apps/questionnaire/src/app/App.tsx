import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import QuestionnairePage from "./components/QuestionnairePage";
import { FC } from "react";

const App: FC = () => {
  return (
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />
        <Route
          path="/page-2"
          element={<QuestionnairePage />}
        />
      </Routes>
  );
};

export default App;
