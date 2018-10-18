import * as React from "react";
import { IListItem } from "../../types/IListItem";
import { ListItemTemplate } from "../ListItem/ListItemTemplate";

interface IProps {
  removeItem: (id: string) => void;
  items: IListItem[];
}

export function ListTemplate(props: IProps): JSX.Element {
  return (
    <div>
      <ul>
        {props.items.map((item: IListItem) => (
            <ListItemTemplate
              key={item.id}
              item={item}
              removeItem={props.removeItem}
            />)
        )}
      </ul>
    </div>
  );
}
