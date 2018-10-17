import * as React from 'react';
import { FormBehaviour } from '../Form/FormBehaviour';

interface IProps {
    
}

export function AppTemplate(props: IProps): JSX.Element {
    return (
        <div>
            <FormBehaviour></FormBehaviour>
        </div>
    )
}