import * as React from 'react';
import { List, Label } from 'semantic-ui-react';

export interface Props {
    labels: Array<string>;
    currentLabel: string
}

function LabelList({ labels = [], currentLabel }: Props) {
    return (
        <List>
            {
                labels.map(label =>
                    <List.Item key={label} className='label-item'>
                        <Label >{label}</Label>
                    </List.Item>
                )
            }
        </List>
    );
}
export default LabelList;