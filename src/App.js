import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import AddAndDeleteButtons from "./components/Add And Delete Buttons";

function App() {
  const [counter, setCounter] = useState([0]);
  return (
    <div>
      {/* Header */}

      <header>
        <i className="fa-solid fa-calculator fa-7x"></i>
        <h1>React Counter V2</h1>
      </header>

      {/* Add and Delete buttons */}
      <AddAndDeleteButtons counter={counter} setCounter={setCounter} />

      {/* Counter and Buttons */}
      <div className="global-counter">
        {counter.map((number, index) => {
          return (
            <Counter
              counter={counter}
              setCounter={setCounter}
              number={number}
              index={index}
            />
          );
        })}
      </div>

      {/* Footer */}
      <footer>
        <div>
          Made with <span className="bold"> React </span> at
          <span className="bold"> Le Reacteur </span> by
          <span className="bold"> Nicolas</span>.
        </div>
      </footer>
    </div>
  );
}

export default App;
