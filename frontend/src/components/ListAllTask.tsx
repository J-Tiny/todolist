import axios from "../services/api";
import { useState } from "react";
import {tasks,setTasks} from "../types/task"
const TaskList: React.FC<tasks & setTasks> = (props) => {
  const { tasks, setTasks } = props;
  const deleteTask = (id: number) => {
    axios.delete(`/tasks/delete/${id}`).then(() => {
      const taskList = [...tasks];
      const index = taskList.findIndex((task) => task.id === id);
      taskList.splice(index, 1);
      setTasks(taskList);
    });
  };
  const [input, setInput] = useState("");
  const [id, setId] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const addTask = () => {
    if (input) {
      axios.post(`/tasks/add`, { title: input }).then((res) => {
        const { data } = res.data;
        setTasks([...tasks, data]);
        setInput("");
      });
    }
  };
  const editTask = (title: string,id:number) => {
    setInput(title);
    if(id!==0){
      setId(id);
    }
    setIsEdit(true);
  };
  const saveTask = (id:number) => {
    axios.patch(`/tasks/edit/${id}`,{title:input}).then((res) => {
      console.log(res.data);
      const { data } = res.data;
      const taskList = [...tasks];
      const index = taskList.findIndex((task) => task.id === id);
      taskList[index] = data
      setTasks(taskList);
      setIsEdit(false)
      setInput("");
    });
  };
  return (
    <div>
      <p>
        <label htmlFor="input1" className="Subtitle">
          Enter a new task
        </label>
      </p>
      <input
        id="input1"
        type="text"
        className="Task-input"
        placeholder="Task.."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      {!isEdit ? (
        <button className="AddButton" onClick={addTask}>
          +
        </button>
      ) : (
        <>
          <button className="SaveButton" onClick={()=>saveTask(id)}>
            <i
              style={{ cursor: "pointer", fontSize: "0.8rem" }}
              className="material-icons"
            >
              save
            </i>
          </button>
          <button>
            <i
              style={{ cursor: "pointer", fontSize: "0.8rem" }}
              className="material-icons"
              onClick={() => {
                setIsEdit(false);
                setInput("");
              }}
            >
              close
            </i>
          </button>
        </>
      )}
      <div className="TaskList">
        {tasks.length === 0 ? (
          <div style={{ marginTop: "5rem", fontSize: "2rem" }}>
            no task TODO right now !!! &#128516; &#128516; &#128516;
          </div>
        ) : (
          <div className="Container">
            {tasks.map(({ id, title }: any) => {
              return (
                <div className="TaskContainer" key={id}>
                  <li
                    style={{
                      marginRight: "4rem",
                    }}
                  >
                    {title}
                  </li>
                  <i
                    style={{
                      color: "red",
                      fontSize: "1.2rem",
                      cursor: "pointer",
                    }}
                    className="material-icons"
                    onClick={() => deleteTask(id)}
                  >
                    delete
                  </i>
                  <label htmlFor="input1">
                    <i
                      style={{ cursor: "pointer", fontSize: "1.2rem" }}
                      className="material-icons"
                      onClick={() => editTask(title,id)}
                    >
                      edit
                    </i>
                  </label>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
