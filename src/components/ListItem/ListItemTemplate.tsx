import * as React from "react";
import { IListItem } from "../../types/IListItem"

interface IProps {
  removeItem: (id: string) => void;
  item: IListItem;
}

export function ListItemTemplate({ item: { id, textValue }, removeItem}: IProps) {
  function deleteById() {
    removeItem(id);
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
