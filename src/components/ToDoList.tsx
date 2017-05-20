import * as React from 'react'
import { List, Checkbox } from 'semantic-ui-react';
import * as Model from '../types/index'

export interface OnToggleTask {
    (id: string): void
}
export interface Props {
    tasks: Array<Model.ToDo>;
    onToggleTask: OnToggleTask
}

export default function ({ tasks = [], onToggleTask }: Props) {
    return (
        <List>
            {
                tasks.map(task =>
                    <List.Item key={task.id} onClick = { () => onToggleTask(task.id) } className='todo-item'>
                        <Checkbox checked={task.completed} label={task.title}/>
                    </List.Item>
                )
            }
        </List>
    )
}