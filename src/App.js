import { useReducer, useState } from "react";
import "./App.css";

const ACTIONS = {
  NEXT_STEP: 'next_step',
  PREV_STEP: 'prev_step',
  ACTIVE_COLOR: 'rgb(70, 92, 216)',
  DISACTIVE_COLOR: 'gray',
}

function stepsReducer(steps, action) {
  switch (action.type) {
    case ACTIONS.NEXT_STEP:
      // let pages = document.getElementById('pages').childNodes
      if (action.payload.step < 5 && action.payload.step > 0) return [...steps, { stepNum: action.payload.step, prevBtnColor: ACTIONS.ACTIVE_COLOR, nextBtnColor: ACTIONS.ACTIVE_COLOR }]
      return [...steps]

    case ACTIONS.PREV_STEP:
      const newSteps = [...steps].filter((step) => {
        return step.stepNum < action.payload.step
      })
      return newSteps
    // if(){}
    default:
      return steps;
  }
}

export default function App() {
  const [steps, dispatch] = useReducer(stepsReducer, [{ stepNum: 0, prevBtnColor: ACTIONS.ACTIVE_COLOR, nextBtnColor: ACTIONS.ACTIVE_COLOR }])
  const [number, setNumber] = useState(1);

  // Handle Next Click 
  const handlePrevClick = () => {
    setNumber(number - 1);
    dispatch({ type: ACTIONS.PREV_STEP, payload: { step: number } })
    let divs = document.querySelector('#pages').getElementsByTagName('div')
    let spans = document.querySelector('#pages').getElementsByTagName('span')
    divs[number].style.borderColor = ACTIONS.DISACTIVE_COLOR
    spans[number - 1].style.backgroundColor = ACTIONS.DISACTIVE_COLOR
  };

  // Handle Next Click 
  const handleNextClick = () => {
    setNumber(number + 1);
    dispatch({ type: ACTIONS.NEXT_STEP, payload: { step: number } })
    let divs = document.querySelector('#pages').getElementsByTagName('div')
    let spans = document.querySelector('#pages').getElementsByTagName('span')
    divs[number].style.borderColor = ACTIONS.ACTIVE_COLOR
    spans[number - 1].style.backgroundColor = ACTIONS.ACTIVE_COLOR
    console.log(number)
    console.log(divs)
    console.log(spans)
  };

  console.log(steps)
  return (
    <div className="container">
      <div id="pages" className="pages">
        <div style={{ borderColor: ACTIONS.ACTIVE_COLOR }}>1</div>
        <span></span>
        <div>2</div>
        <span></span>
        <div>3</div>
        <span></span>
        <div>4</div>
      </div>
      <div id="btns" className="btns">
        <button
          onClick={() => {
            if (number === 1) {
              return;
            }
            return handlePrevClick()
          }}
          id="prevBtn"
          data-testid="prevBtn"
        >
          Prev
        </button>
        <button
          onClick={() => {
            if (number === 4) {
              return;
            }
            return handleNextClick()
          }}
          id="nextBtn"
          data-testid="nextBtn"
        >
          Next
        </button>
      </div>
    </div>
  );
}