import { task } from "types/task";
export const ADD_TASK = "ADD_TASK";
export const SET_TASK_LIST = "SET_TASK_LIST";
export const UPDATE_TASK = "UPDATE_TASK";
export const DELETE_TASK = "DELETE_TASK";

export const addTask = (task: task) => ({
  type: ADD_TASK,
  payload: {
    value: task,
  },
});
export const updateTask = (task: task) => ({
    type: UPDATE_TASK,
    payload: {
      value: task,
    },
  });
export const setTasks = (tasks: task[]) => ({
  type: SET_TASK_LIST,
  payload: {
    value: tasks,
  },
});
export const deleteTask = (id: number) => ({
  type: DELETE_TASK,
  payload: id
});
