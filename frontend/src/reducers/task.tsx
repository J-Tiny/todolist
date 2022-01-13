/* eslint-disable import/no-anonymous-default-export */
import { SET_TASK_LIST, DELETE_TASK, ADD_TASK,UPDATE_TASK } from "actions/task";
import { task } from "types/task";
export interface TaskState {
  taskList: task[];
}
const initialState: TaskState = {
  taskList: [],
};
export default (state = initialState, { type, payload }): TaskState => {
  switch (type) {
    case SET_TASK_LIST:
      return {
        ...state,
        taskList: payload.value as task[]
      };
    case DELETE_TASK:
      return {
        ...state,
        taskList: state.taskList.filter(
          (task) => task.id !== (payload as number)
        ),
      };
    case ADD_TASK:
      return {
        ...state,
        taskList: [...state.taskList, payload.value as task],
      };
    case UPDATE_TASK:
      const taskList = [...state.taskList];
      const index = taskList.findIndex((task) => task.id === payload.value.id as number);
      taskList[index] = payload.value as task
        return {
            ...state,
            taskList: taskList
        }
    default:
      return state;
  }
};
