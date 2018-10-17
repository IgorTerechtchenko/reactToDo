import * as React from 'react';
import { FormTemplate } from '../Form/FormTemplate';

interface IState {
   currentValue: string; 
}

export class AppBehaviour extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = {currentValue: ''};
    }
    render() {
        return (
            React.createElement(FormBehaviour, )
        )
    }
}