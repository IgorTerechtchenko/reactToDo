import * as React from "react";
import { ITask } from "../../store/task/types"

interface IProps {
  removeTask: (id: string) => void;
  item: ITask;
}

export function ListItemTemplate({ item: { id, textValue }, removeTask}: IProps) {
  function deleteById() {
    removeTask(id);
  }
  return (
    <li>
      {textValue}
      <button className="delete" onClick={deleteById}>
        Delete
      </button>
    </li>
  );
}
