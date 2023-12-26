import { useReducer, useState } from "react";
import "./App.css";

const ACTIONS = {
  NEXT_STEP: 'next_step',
  PREV_STEP: 'prev_step',
  prevActiveColor: 'rgb(70, 92, 216)',
}

function stepsReducer(steps, action) {
  switch (action.type) {
    case ACTIONS.NEXT_STEP:
      // let pages = document.getElementById('pages').childNodes
      if (action.payload.step < 5 && action.payload.step > 0) return [...steps, { stepNum: action.payload.step, prevBtnColor: 'rgb(70, 92, 216)', nextBtnColor: 'rgb(70, 92, 216)' }]
      return [...steps]
    default:
      return steps;
  }
}

export default function App() {
  const [steps, dispatch] = useReducer(stepsReducer, [{ stepNum: 1, prevBtnColor: 'rgb(70, 92, 216)', nextBtnColor: 'rgb(70, 92, 216)' }])
  const [number, setNumber] = useState(2);
  const handlePrevClick = () => {
    setNumber(number - 1);
    dispatch({ type: ACTIONS.PREV_STEP })
  };
  const handleNextClick = () => {
    setNumber(number + 1);
    dispatch({ type: ACTIONS.NEXT_STEP, payload: { step: number } })
  };

  console.log(steps)
  return (
    <div className="container">
      <div id="pages" className="pages">
        <div style={{ borderColor: ACTIONS.prevActiveColor }}>1</div>
        <span></span>
        <div>2</div>
        <span></span>
        <div>3</div>
        <span></span>
        <div>4</div>
      </div>
      <div id="btns" className="btns">
        <button
          onClick={() => handlePrevClick()}
          id="prevBtn"
          data-testid="prevBtn"
        >
          Prev
        </button>
        <button
          onClick={() => handleNextClick()}
          id="nextBtn"
          data-testid="nextBtn"
        >
          Next
        </button>
      </div>
    </div>
  );
}