import { combineReducers, createStore } from "redux";
import { taskReducer } from "./task/reducer";
import { ITaskState } from "./task/types"

interface IStoreState {
  tasks: ITaskState;
}

const rootReducer = combineReducers<IStoreState>({
  tasks: taskReducer,
})

export const store = createStore(
  rootReducer,
);