import * as React from "react";
import { FormTemplate } from "./FormTemplate";

interface IState {
  value: string;
}

interface IProps {
  liftInputValue: (value: string) => void;
}

export class FormBehaviour extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = { value: "" };
  }
  public render() {
    return React.createElement(FormTemplate, {
      changeHandler: this.handleChange,
      clickHandler: this.handleClick,
      value: this.state.value
    });
  }
  private handleClick(event: React.SyntheticEvent<HTMLButtonElement>) {
    if (this.state.value !== "") {
      this.props.liftInputValue(this.state.value);
    }
    this.setState({ value: "" });
  }
  private handleChange(event: React.SyntheticEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    this.setState({ value: newValue });
  }
}
