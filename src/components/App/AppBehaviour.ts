import * as React from "react";
import { v1 as uuidv1 } from "uuid";
import { IListItem } from "../../types/IListItem";
import { AppTemplate } from "./AppTemplate";

interface IState {
  currentValue: string;
  items: IListItem[];
}

export class AppBehaviour extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = { currentValue: "", items: [] };
    this.liftInputValue = this.liftInputValue.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  public render(): JSX.Element {
    return React.createElement(AppTemplate, {
      currentValue: this.state.currentValue,
      items: this.state.items,
      liftInputValue: this.liftInputValue,
      removeItem: this.removeItem
    });
  }
  private liftInputValue(value: string) {
    const newValue = { id: uuidv1(), textValue: value };
    const tmpItems = [...this.state.items, newValue];
    this.setState({ items: tmpItems });
  }
  private removeItem(id: string) {
    const tmpItems = this.state.items.filter((item: IListItem) => {
      return item.id !== id;
    });
    this.setState({ items: tmpItems });
  }
}