import "./App.css";
import { useState } from "react";

function App() {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);

  const handleRight = () => {
    setState1(state1 + 50);
  };
  const handleLeft = () => {
    setState1(state1 - 50);
  };
  const handleUp = () => {
    setState2(state2 - 50);
  };
  const handleDown = () => {
    setState2(state2 + 50);
  };

  return (
    <div className="card-game">
      <button onClick={handleUp} disabled={state2 === 0} className="updown">
        Up
      </button>
      <div className="card-hz">
        <button onClick={handleLeft} disabled={state1===0} className="left-right">
          Left
        </button>
        <div className="card-big">
          <div className="card-small" style={{ top: state2, left: state1 }}>
          </div>
        </div>
        <button onClick={handleRight} disabled={state1===450} className="left-right">
          Right
        </button>
      </div>
      <button onClick={handleDown} disabled={state2===450} className="updown">
        Down
      </button>
      
    </div>
  );
}

export default App;
