import * as React from "react";
import { IListItem } from "../../types/IListItem";
import { FormBehaviour } from "../Form/FormBehaviour";
import { ListBehaviour } from "../List/ListBehaviour";

interface IProps {
  currentValue: string;
  liftInputValue: () => void;
  removeItem: () => void;
  items: IListItem[];
}

export function AppTemplate(props: IProps): JSX.Element {
  const { liftInputValue, removeItem } = props;
  return (
    <div>
      <FormBehaviour liftInputValue={liftInputValue} />
      <ListBehaviour items={props.items} removeItem={removeItem} />
    </div>
  );
}
