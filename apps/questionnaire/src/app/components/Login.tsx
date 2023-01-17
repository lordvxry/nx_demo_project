import { FC } from "react";
import { Link } from "react-router-dom";
import { Header } from "@nx-demo-project/ui-kit";

const Login: FC = () => {
  const title = "Authorization";

  return (
    <div>
      <Header title={title} />
      <Link to="/page-2">Page 2</Link>
    </div>
  );
};

export default Login;
