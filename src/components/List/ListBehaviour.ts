import * as React from "react";
import { IListItem } from "../../types/IListItem";
import { ListTemplate } from "./ListTemplate";

interface IProps {
  removeItem: (id: string) => void;
  items: IListItem[];
}

export class ListBehaviour extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }
  public render(): JSX.Element {
    return React.createElement(ListTemplate, {
      handleDeleteClick: this.handleDeleteClick,
      items: this.props.items
    });
  }
  private handleDeleteClick(id: string) {
    this.props.removeItem(id);
  }
}
