import axios from "../services/api";
import { useState } from "react";
import { deleteTask, addTask, updateTask} from "actions/task"
import {useDispatch} from "react-redux"
import useSelector from "hooks";
const TaskList: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state)=> state.task.taskList);
  const deleteTaskApi = (id: number) => {
    axios.delete(`/tasks/delete/${id}`)
    dispatch(deleteTask(id))
  };
  const [input, setInput] = useState("");
  const [id, setId] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const addTaskApi = () => {
    if (input) {
      axios.post(`/tasks/add`, { title: input }).then((res) => {
        const { data } = res.data;
        setInput("");
        dispatch(addTask(data))
      });
    }
  };
  const editTaskInput = (title: string,id:number) => {
    setInput(title);
    if(id!==0){
      setId(id);
    }
    setIsEdit(true);
  };
  const editTask = (id:number) => {
    axios.patch(`/tasks/edit/${id}`,{title:input}).then((res) => {
      const { data } = res.data
      setIsEdit(false)
      setInput("");
      dispatch(updateTask(data))
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
        <button className="AddButton" onClick={addTaskApi}>
          +
        </button>
      ) : (
        <>
          <button className="SaveButton" onClick={()=>editTask(id)}>
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
                    onClick={() => deleteTaskApi(id)}
                  >
                    delete
                  </i>
                  <label htmlFor="input1">
                    <i
                      style={{ cursor: "pointer", fontSize: "1.2rem" }}
                      className="material-icons"
                      onClick={() => editTaskInput(title,id)}
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
