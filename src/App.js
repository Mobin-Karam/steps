import { useState } from "react";
import "./App.css";



export default function App() {
  const [number, setNumber] = useState(1);
  const handlePrevClick = () => {
    setNumber(number - 1);
  };
  const handleNextClick = () => {
    setNumber(number + 1);
  };
  return (
    <div className="container">
      <div id="pages" className="pages">
        <div style={{ borderColor: 'rgb(70, 92, 216)' }} className="">1</div>
        <span style={{ backgroundColor: (number === 2 || number === 3 || number === 4) ? 'rgb(70, 92, 216)' : 'gray' }} className=""></span>
        <div style={{ borderColor: (number === 2 || number === 3 || number === 4) ? 'rgb(70, 92, 216)' : 'gray' }} className="">2</div>
        <span style={{ backgroundColor: (number === 3 || number === 4) ? 'rgb(70, 92, 216)' : 'gray' }} className=""></span>
        <div style={{ borderColor: (number === 3 || number === 4) ? 'rgb(70, 92, 216)' : 'gray' }} className="">3</div>
        <span style={{ backgroundColor: number === 4 ? 'rgb(70, 92, 216)' : 'gray' }} className=""></span>
        <div style={{ borderColor: number === 4 ? 'rgb(70, 92, 216)' : 'gray' }} className="">4</div>

      </div>
      <div id="btns" className="btns">
        {number === 1 ? (
          <button
            style={{ backgroundColor: 'gray' }}
            id="prevBtn" className="prevBtn">
            Prev
          </button>
        ) : (
          <button
            onClick={() => handlePrevClick()}
            id="prevBtn"
            data-testid="prevBtn"
          >
            Prev
          </button>
        )}
        {number === 4 ? (
          <button style={{ backgroundColor: 'gray' }} id="nextBtn" className="">
            Next
          </button>
        ) : (
          <button
            onClick={() => handleNextClick()}
            id="nextBtn"
            data-testid="nextBtn"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}