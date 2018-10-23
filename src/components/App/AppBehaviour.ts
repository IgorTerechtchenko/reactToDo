import * as React from "react";
import { ITask } from "../../store/task/types";
import { AppTemplate } from "./AppTemplate";

interface IState {
  taskList: ITask[];
}

export class AppBehaviour extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
  }
  public render(): JSX.Element {
    return React.createElement(AppTemplate, {
      taskList: this.state.taskList,
    });
  }
}
