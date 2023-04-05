import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TaskForm from "./components/TaskForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <TaskForm />
    </div>
  );
}

export default App;
