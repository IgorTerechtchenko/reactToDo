import * as React from "react";
import { ITask } from  "../../store/task/types"
import { FormBehaviour } from "../Form/FormBehaviour";
import { ListTemplate } from "../List/ListTemplate";

interface IProps {
  addTask: () => void;
  removeTask: () => void;
  taskList: ITask[];
}

export function AppTemplate(props: IProps): JSX.Element {
  return (
    <div>
      <FormBehaviour/>
      <ListTemplate taskList = { props.taskList } removeTask = {props.removeTask }/>
    </div>
  );
}
