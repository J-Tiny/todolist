import { useEffect } from "react";
import axios from "../services/api";
import TaskList from "../components/ListAllTask";
import { setTasks } from "actions/task";
import { useDispatch } from "react-redux";
const TodoList = () => {
  const dispatch = useDispatch()
    const getTasks = () => {
      axios.get("/tasks").then((res) => {
        const { data } = res.data;
        dispatch(setTasks(data));
      });
    }
    useEffect(() => {
      getTasks()
    });
  return (
    <div>
      <TaskList/>
    </div>
  );
};

export default TodoList;
