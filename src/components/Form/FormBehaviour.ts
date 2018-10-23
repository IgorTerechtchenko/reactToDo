import * as React from "react";
import { v1 as uuid } from "uuid";
import { ITask } from "../../store/task/types";
import { FormTemplate } from "./FormTemplate";

interface IState {
  value: string;
}

interface IProps {
  addItem: (newValue: IState) => void,
  removeItem: (id: string) => void,
}

export class FormBehaviour extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = { value: "" };
  }
  public render(): JSX.Element {
    return React.createElement(FormTemplate, {
      changeHandler: this.handleChange,
      clickHandler: this.handleClick,
      value: this.state.value
    });
  }
  private handleClick(event: React.SyntheticEvent<HTMLButtonElement>): void {
    if (this.state.value !== "") {
      const newValue: ITask = { id: uuid(), textValue: this.state.value };
      this.props.addItem(newValue);
    }
  }
  private handleChange(event: React.SyntheticEvent<HTMLInputElement>): void {
    const newValue = event.currentTarget.value;
    this.setState({ value: newValue });
  }
}
