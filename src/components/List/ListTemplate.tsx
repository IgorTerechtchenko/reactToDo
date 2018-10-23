import * as React from "react";
import { ITask } from "../../store/task/types";
import { ListItemTemplate } from "../ListItem/ListItemTemplate";

interface IProps {
  removeTask: (id: string) => void;
  taskList: ITask[];
}

export function ListTemplate(props: IProps): JSX.Element {
  return (
    <div>
      <ul>
        {props.taskList.map((task: ITask) => 
            <ListItemTemplate
              key={task.id}
              item={task}
              removeTask={props.removeTask}
            />
        )}
      </ul>
    </div>
  );
}