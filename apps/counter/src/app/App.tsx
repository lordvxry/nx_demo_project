import { Button } from "@blueprintjs/core";
import { useState } from "react";
import style from "./app.module.scss"
import { Header } from "@nx-demo-project/ui-kit";

const App = () => {
  const [count, setCount] = useState(0);
  const title = 'Welcome to Counter!'
  const incrementHandler = () => {
    setCount(prevState => prevState + 1);
  };
  const decrementHandler = () => {
    setCount(prevState => prevState - 1);
  };

  return (
    <>
      <Header title={title} />
      <div className={style.container}>
        <h1>{count}</h1>
        <div className={style.btns}>
          <Button intent="danger" text="decrement" onClick={decrementHandler} />
          <Button intent="success" text="increment" onClick={incrementHandler} />
        </div>
      </div>
    </>
  );
};

export default App;
