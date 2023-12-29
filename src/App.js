import { useReducer, useState } from "react";
import "./App.css";

const ACTIONS = {
  NEXT_STEP: 'next_step',
  PREV_STEP: 'prev_step',
  ACTIVE_COLOR: 'rgb(70, 92, 216)',
  DISACTIVE_COLOR: 'gray',
}

const initialStep = [
  {
    stepNum: 1,
    prevBtnColor: ACTIONS.DISACTIVE_COLOR,
    nextBtnColor: ACTIONS.ACTIVE_COLOR,
    backgroundColor: ACTIONS.ACTIVE_COLOR,
    borderColor: ACTIONS.ACTIVE_COLOR,
  },
]

function stepsReducer(steps, action) {
  const { type, payload } = action
  // Delete Step Fuction
  function deleteStep(step) {
    return step.stepNum < action.payload.step - 1
  }
  // get element
  let divs = document.querySelector('#pages').getElementsByTagName('div')
  let spans = document.querySelector('#pages').getElementsByTagName('span')
  // switch if else statement
  switch (type) {
    // Next Btn
    case ACTIONS.NEXT_STEP:
      divs[payload.step - 1].style.borderColor = ACTIONS.ACTIVE_COLOR
      spans[payload.step - 2].style.backgroundColor = ACTIONS.ACTIVE_COLOR
      if (payload.step < 5 && payload.step > 0) return [...steps,
      {
        stepNum: payload.step,
        prevBtnColor: ACTIONS.ACTIVE_COLOR,
        nextBtnColor: steps[payload.step - 2].stepNum === 4 ? ACTIONS.DISACTIVE_COLOR : ACTIONS.ACTIVE_COLOR,
        divNum: `div[${payload.step - 1}]`,
        spanNum: `span[${payload.step - 2}]`,
      }]
      return [...steps]
    // Prev Btn
    case ACTIONS.PREV_STEP:
      divs[payload.step - 2].style.borderColor = ACTIONS.DISACTIVE_COLOR
      spans[payload.step - 3].style.backgroundColor = ACTIONS.DISACTIVE_COLOR
      const newSteps = steps.filter(deleteStep)
      return newSteps;
    // if(){}
    default:
      return steps;
  }
}

export default function App() {
  const [steps, dispatch] = useReducer(stepsReducer, initialStep)
  const [number, setNumber] = useState(2);

  // Handle Next Click 
  const handlePrevClick = () => {
    dispatch({ type: ACTIONS.PREV_STEP, payload: { step: number } })
    setNumber(number - 1);
  };

  // Handle Next Click 
  const handleNextClick = () => {
    setNumber(number + 1);
    dispatch({ type: ACTIONS.NEXT_STEP, payload: { step: number } })
  };
  return (
    <div className="container">
      <div id="pages" className="pages">
        <div style={{ borderColor: steps[number - 2].nextBtnColor }}>1</div>
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
            if (number === 2) {
              return;
            }
            return handlePrevClick()
          }}
          style={number === 2 ? { backgroundColor: ACTIONS.DISACTIVE_COLOR } : { backgroundColor: ACTIONS.ACTIVE_COLOR }}
          id="prevBtn"
          data-testid="prevBtn"
        >
          Prev
        </button>
        <button
          onClick={() => {
            if (number === 5) {
              return;
            }
            return handleNextClick()
          }}
          style={number === 5 ? { backgroundColor: ACTIONS.DISACTIVE_COLOR } : { backgroundColor: ACTIONS.ACTIVE_COLOR }}
          id="nextBtn"
          data-testid="nextBtn"
        >
          Next
        </button>
      </div>
    </div >
  );
}