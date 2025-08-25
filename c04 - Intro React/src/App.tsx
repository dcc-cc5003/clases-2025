import { useState } from "react";
import "./App.css";
interface HelloProps {
  name: string;
  age: number;
}

const Hello = ({ name, age }: HelloProps) => {
  return (
    <div>
      Hello {age} your age is {name}
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  console.log("redering", count);
  /*setTimeout(() => {
    setCount(count + 1);
  }, 1000);*/
  const doPlusOne = () => setCount(count + 1);
  const doReset = () => setCount(0);
  return (
    <div>
      <div>Counter: {count}</div>
      <button onClick={doPlusOne}>+1</button>
      <button onClick={doReset}>reset</button>
    </div>
  );
};

const Display = (props: { counter: number }) => {
  return <div>{props.counter}</div>;
};

const Button = (props: { onClick: () => void; texto: string }) => {
  return (
    <button className="mybutton" onClick={props.onClick}>
      {props.texto}
    </button>
  );
};

const History = (props: { allClicks: string[] }) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {props.allClicks.join(" ")}</div>;
};

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  const [allClicks, setAll] = useState<string[]>([]);
  const [total, setTotal] = useState(0);
  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
    setTotal(left + 1 + right);
  };
  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
    setTotal(left + right + 1);
  };
  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <History allClicks={allClicks} />
      <p>total {total}</p>
    </div>
  );
};
export default App;
