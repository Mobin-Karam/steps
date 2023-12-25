import { useReducer, useState } from "react";
import "./App.css";

// Data
const initalSteps = [
  {
    id: 1,
    prevBtnType: false,
    nextBtnType: true,
  },
  {
    id: 2,
    prevBtnType: true,
    nextBtnType: true,
  },
  {
    id: 3,
    prevBtnType: true,
    nextBtnType: true,
  },
  {
    id: 4,
    prevBtnType: true,
    nextBtnType: false,
  },
];

// ======= Document

export default function App() {
  // const [steps, dispatch] = useReducer(stepReducer, initalSteps);
  const [number, setNumber] = useState(1);

  // function stepReducer(steps, action) {
  //   switch (action.type) {
  //     case "ADD_STEP":
  //       return "mobin";
  //     case "PREV_STEP":
  //       return "Maha";
  //     default:
  //       return steps;
  //   }
  // }

  // const nextBtn = document.getElementById("#nextBtn");

  // if (number === 0) {
  // return (prevBtn.style.backgroundColor = "gray");
  // }

  // switch (number) {
  //   case 0: {
  //   }
  //   default:
  //     break;
  // }

  // console.log(preb)

  // document.getElementById("off").style.color = "white";
  // ====================================

  // Prev Btn HandleClick
  const handlePrevClick = () => {
    console.log("PrevBtn Click");

    setNumber(number - 1);
    console.log(number);
  };

  // Next Btn HandleClick
  const handleNextClick = () => {
    console.log("NextBtn Click");

    setNumber(number + 1);
    console.log(number);
  };

  return (
    <div className="container">
      <div id="pages" className="pages">
        <div className="active">1</div>
        <span className=""></span>
        <div className="">2</div>
        <span className=""></span>
        <div className="">3</div>
        <span className=""></span>
        <div className="">4</div>
      </div>
      <div id="btns" className="btns">
        {number === 1 ? (
          <button
          
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
          <button id="nextBtn" className="">
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

// const prevBtn = document.getElementById("btns");
// console.log(prevBtn.childNodes);

// export default App;

// const initialTodos = [
//   {
//     id: 1,
//     title: "Todo 1",
//     complete: false,
//   },
//   {
//     id: 2,
//     title: "Todo 2",
//     complete: false,
//   },
//   {
//     id: 3,
//     title: "Todo 3",
//     complete: false,
//   },
//   {
//     id: 4,
//     title: "Todo 4",
//     complete: false,
//   },
// ];

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "COMPLETE":
//       return state.map((todo) => {
//         if (todo.id === action.id) {
//           return { ...todo, complete: !todo.complete };
//         } else {
//           return todo;
//         }
//       });
//     default:
//       return state;
//   }
// };

// export default function Todos() {
//   const [todos, dispatch] = useReducer(reducer, initialTodos);
//   // console.log(todos);

//   const handleComplete = (todo) => {
//     dispatch({ type: "COMPLETE", id: todo.id });
//     console.log(todo)
//   };

//   return (
//     <>
//       {todos.map((todo) => (
//         <div key={todo.id}>
//           <label>
//             <input
//               type="checkbox"
//               checked={todo.complete}
//               onChange={() => handleComplete(todo)}
//             />
//             {todo.title}
//           </label>
//         </div>
//       ))}
//     </>
//   );
// }

// TODO app
// export default function TaskApp() {
//   const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

//   function handleAddTask(text) {
//     dispatch({
//       type: "added",
//       id: nextId++,
//       text: text,
//     });
//   }

//   function handleChangeTask(task) {
//     dispatch({
//       type: "changed",
//       task: task,
//     });
//   }

//   function handleDeleteTask(taskId) {
//     dispatch({
//       type: "deleted",
//       id: taskId,
//     });
//   }

//   return (
//     <>
//       <h1>Day off in Kyoto</h1>
//       <AddTask onAddTask={handleAddTask} />
//       <TaskList
//         tasks={tasks}
//         onChangeTask={handleChangeTask}
//         onDeleteTask={handleDeleteTask}
//       />
//     </>
//   );
// }

// function tasksReducer(tasks, action) {
//   switch (action.type) {
//     case "added": {
//       return [
//         ...tasks,
//         {
//           id: action.id,
//           text: action.text,
//           done: false,
//         },
//       ];
//     }
//     case "changed": {
//       return tasks.map((t) => {
//         if (t.id === action.task.id) {
//           return action.task;
//         } else {
//           return t;
//         }
//       });
//     }
//     case "deleted": {
//       return tasks.filter((t) => t.id !== action.id);
//     }
//     default: {
//       throw Error("Unknown action: " + action.type);
//     }
//   }
// }

// let nextId = 3;
// const initialTasks = [
//   { id: 0, text: "Philosopher’s Path", done: true },
//   { id: 1, text: "Visit the temple", done: false },
//   { id: 2, text: "Drink matcha", done: false },
// ];

//==== add task components =============================================
// function AddTask({ onAddTask }) {
//   const [text, setText] = useState("");
//   console.log(text)
//   return (
//     <>
//       <input
//         placeholder="Add task"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <button
//         onClick={() => {
//           setText("");
//           onAddTask(text);
//         }}
//       >
//         Add
//       </button>
//     </>
//   );
// }

//== tasks list

// function TaskList({ tasks, onChangeTask, onDeleteTask }) {
//   return (
//     <ul>
//       {tasks.map((task) => (
//         <li key={task.id}>
//           <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
//         </li>
//       ))}
//     </ul>
//   );
// }

// function Task({ task, onChange, onDelete }) {
//   const [isEditing, setIsEditing] = useState(false);
//   let taskContent;
//   if (isEditing) {
//     taskContent = (
//       <>
//         <input
//           value={task.text}
//           onChange={(e) => {
//             onChange({
//               ...task,
//               text: e.target.value,
//             });
//           }}
//         />
//         <button onClick={() => setIsEditing(false)}>Save</button>
//       </>
//     );
//   } else {
//     taskContent = (
//       <>
//         {task.text}
//         <button onClick={() => setIsEditing(true)}>Edit</button>
//       </>
//     );
//   }
//   return (
//     <label>
//       <input
//         type="checkbox"
//         checked={task.done}
//         onChange={(e) => {
//           onChange({
//             ...task,
//             done: e.target.checked,
//           });
//         }}
//       />
//       {taskContent}
//       <button onClick={() => onDelete(task.id)}>Delete</button>
//     </label>
//   );
// }
