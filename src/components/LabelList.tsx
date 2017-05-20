import * as React from 'react';
import { List, Label } from 'semantic-ui-react';

export interface Props {
    labels: Array<string>;
}

function LabelList({ labels = [] }: Props) {
    return (
        <List>
            {
                labels.map(label =>
                    (<List.Item key={label}>
                        <Label>{label}</Label>
                    </List.Item>)
                )
            }
        </List>
    );
}
export default LabelList;