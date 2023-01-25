import React from "react";
import { useState } from "react";
import { memo, useCallback } from "react";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";

export const App = memo(() => {
  console.log("Appレンダリング");

  const [num, setnum] = useState(0);

  const onClickButton = () => {
    setnum(num + 1);
  };

  const onClickReset = useCallback(() => {
    setnum(0);
  }, []);

  return (
    <>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <Child1 onClickReset={onClickReset} />
      <Child4 />
    </>
  );
});
