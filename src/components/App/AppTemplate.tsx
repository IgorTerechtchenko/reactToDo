import * as React from "react";
import { IListItem } from "../../types/IListItem";
import { FormBehaviour } from "../Form/FormBehaviour";
import { ListTemplate } from "../List/ListTemplate";

interface IProps {
  liftInputValue: () => void;
  removeItem: () => void;
  items: IListItem[];
}

export function AppTemplate(props: IProps): JSX.Element {
  const { liftInputValue, removeItem } = props;
  return (
    <div>
      <FormBehaviour liftInputValue={liftInputValue} />
      <ListTemplate items={props.items} removeItem={removeItem} />
    </div>
  );
}
