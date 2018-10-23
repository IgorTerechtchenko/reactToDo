import actionCreatorFactory from "typescript-fsa";
import { ITask } from "./types";

const actionCreator = actionCreatorFactory();

export const addTask = actionCreator<ITask>("ADD_TASK");
export const removeTask = actionCreator<string>("REMOVE_TASK");
