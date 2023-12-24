import { useReducer } from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="pages">
        <div>1</div>
        <span></span>
        <div>2</div>
        <span></span>
        <div>3</div>
        <span></span>
        <div>4</div>
      </div>
      <div className="btns">
        <button data-testid="prevBtn" className="prevBtn">
          Prev
        </button>
        <button data-testid="nextBtn">Next</button>
      </div>
    </div>
  );
}

export default App;

