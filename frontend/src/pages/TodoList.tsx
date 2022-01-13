import { useState, useEffect } from "react";
import axios from "../services/api";
import TaskList from "../components/ListAllTask";
const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const getTasks = () => {
      axios.get("/tasks").then((res) => {
        const { data } = res.data;
        setTasks(data);
      });
    }
    useEffect(() => {
      getTasks()
    }, []);
  return (
    <div>
      <TaskList tasks={tasks} setTasks={setTasks}/>
    </div>
  );
};

export default TodoList;
