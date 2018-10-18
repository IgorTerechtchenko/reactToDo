import * as React from "react";
import { IListItem } from "../../types/IListItem";
import { ListItemTemplate } from "../ListItem/ListItemTemplate";

interface IProps {
  items: IListItem[];
  handleDeleteClick: (id: string) => void;
}

export function ListTemplate(props: IProps): JSX.Element {
  return (
    <div>
      <ul>
        {props.items.map((item: IListItem) => {
          return (
            <ListItemTemplate
              key={item.id}
              textValue={item.textValue}
              id={item.id}
              handleDeleteClick={props.handleDeleteClick}
            />
          );
        })}
      </ul>
    </div>
  );
}
