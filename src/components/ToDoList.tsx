import * as React from 'react'
import { List, Checkbox } from 'semantic-ui-react';
import * as Model from '../types/index'

export interface Props {
    tasks: Array<Model.ToDo>;
}

export default function ({ tasks = [] }: Props) {
    return (
        <List>
            {tasks.map(task => <Checkbox key={task.id} checked={task.completed} label={task.title} className='todo-item'/>)}
        </List>
    )
}