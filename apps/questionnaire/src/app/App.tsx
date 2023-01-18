import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './components/Login';
import QuestionnairePage from './components/QuestionnairePage';
import { FC } from 'react';
import { Footer, Header } from '@nx-demo-project/ui-kit';

const App: FC = () => {
  const location = useLocation();

  const loginTitle = 'Authorization';
  const mainTitle = 'Welcome to Questionnaire!';

  return (
    <>
      <Header title={location.pathname === '/' ? loginTitle : mainTitle} />
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />
        <Route
          path="/main"
          element={<QuestionnairePage />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
