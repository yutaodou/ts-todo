import * as React from 'react';

export interface Props {
    labels: Array<string>;
    currentLabel: string
}

function LabelList({ labels = [], currentLabel }: Props) {
    return (
        <ul className="menu-list label-list column is-one-quarter">
            {
                labels.map(label => 
                    <li key={label} className="label-item"> <a>{label}</a></li>
                )
            }
        </ul>
    );
}
export default LabelList;