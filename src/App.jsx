import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import firstOner from "./assets/1.png";
import secondOner from "./assets/2.png";
import thirdOner from "./assets/3.png";
import fourthOner from "./assets/4.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [total, setTotal] = useLocalStorage("jeyven", 0);
  useEffect(() => {
    setCount(total);
  }, []);
  useEffect(() => {
    if (total !== count) {
      setTotal(count);
    }
  }, [count]);
  return (
    <>
      <h1> Fortnite Vbucks tracker! </h1>
      <h2>${count.toFixed(2)}</h2>

      {show ? (
        <div className="card-container">
          <div
            onClick={() => setCount((count) => count + 7.99)}
            className="card"
          >
            <img src={firstOner} alt="$7.99" />
          </div>
          <div
            onClick={() => setCount((count) => count + 19.99)}
            className="card"
          >
            <img src={secondOner} alt="$19.99" />
          </div>
          <div
            onClick={() => setCount((count) => count + 31.99)}
            className="card"
          >
            <img src={thirdOner} alt="$31.99" />
          </div>
          <div
            onClick={() => setCount((count) => count + 79.99)}
            className="card"
          >
            <img src={fourthOner} alt="$79.99" />
          </div>
        </div>
      ) : null}
      <div className="button-container">
        <button id="reset" onClick={() => setCount(0)}>
          Reset
        </button>
        <button onClick={() => setShow(true)}>Add a transaction</button>
      </div>
    </>
  );
}

export default App;
