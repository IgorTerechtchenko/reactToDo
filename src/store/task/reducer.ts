import { reducerWithInitialState } from "typescript-fsa-reducers";
import { addTask, removeTask } from "./actions";
import { ITask } from "./types";
import { ITaskState } from "./types";

const initialState: ITaskState = {
  taskList: []
};

export const taskReducer = reducerWithInitialState(initialState)
  .case(addTask, addTaskHandler)
  .case(removeTask, removeTaskHandler);

function addTaskHandler(state: ITaskState, newValue: ITask): ITaskState {
  const tmpItemList = state.taskList.concat(newValue);

  return {
    ...state,
    taskList: tmpItemList
  };
}

function removeTaskHandler(state: ITaskState): ITaskState {
  return state;
}
