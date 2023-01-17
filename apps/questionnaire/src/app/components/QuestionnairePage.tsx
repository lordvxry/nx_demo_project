import { FC } from "react";
import { Link } from "react-router-dom";
import { Header } from "@nx-demo-project/ui-kit";

const QuestionnairePage: FC = () => {
  const title = "Welcome to Questionnaire!";

  return (
    <div>
      <Header title={title} />
      <Link to="/">Home</Link>
    </div>
  );
};

export default QuestionnairePage;
