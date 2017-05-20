import * as React from 'react'
import { Checkbox } from 'semantic-ui-react'

export interface Props {
    completed: boolean;
    title: string;
}

function ToDo({ title, completed = false }: Props) {
    return (
        <Checkbox label={title} checked={completed} />
    )
}
export default ToDo;