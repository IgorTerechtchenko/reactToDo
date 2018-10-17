import * as React from 'react';
import { FormTemplate } from './FormTemplate';

interface IState {
    value: string;
}

interface IProps {

}

export class FormBehaviour extends React.Component<IProps, IState> {
    constructor(props: {}) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {value: ""};
    }
    render() {
        return React.createElement(FormTemplate, {value: this.state.value, clickHandler: this.handleClick, changeHandler: this.handleChange})
    }
    handleClick(e: React.SyntheticEvent<HTMLButtonElement>) {
    }
    handleChange(e: React.SyntheticEvent<HTMLInputElement>) {
        const newValue = e.currentTarget.value;
        this.setState({value: newValue});   
    }
}