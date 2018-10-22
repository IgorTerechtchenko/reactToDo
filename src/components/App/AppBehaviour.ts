import * as React from "react";
import { v1 as uuidv1 } from "uuid";
import { IListItem } from "../../types/IListItem";
import { AppTemplate } from "./AppTemplate";
import { addItem, removeItem } from "../../store/app/actions";
import { store } from "../../store/app/index";

interface IState {
  items: IListItem[];
}

export class AppBehaviour extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.liftInputValue = this.liftInputValue.bind(this);
    this.removeItem = this.removeItem.bind(this);
    store.subscribe(this.render.bind(this));
  }
  public render(): JSX.Element {
    return React.createElement(AppTemplate, {
      items: store.getState().itemList,
      liftInputValue: this.liftInputValue,
      removeItem: this.removeItem
    });
  }
  private liftInputValue(value: string) {
    const newValue = { id: uuidv1(), textValue: value };
    store.dispatch(addItem(newValue));
  }
  private removeItem(id: string) {
    const tmpItems = this.state.items.filter((item: IListItem) => {
      return item.id !== id;
    });
    store.dispatch(removeItem(tmpItems));
  }
}