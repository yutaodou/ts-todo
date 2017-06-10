import * as React from 'react'
import * as Model from '../model'

export interface OnToggleTask {
    (id: string): void
}
export interface Props {
    tasks: Array<Model.ToDo>;
    onToggleTask: OnToggleTask
}

export default function ({ tasks = [], onToggleTask }: Props) {
    return (
        <ul className="menu column menu-list task-list">
            {
                tasks.map(task => (
                    <li key={task.id} onClick={() => onToggleTask(task.id)} className="todo-item">
                        <span className={task.completed ? 'completed' : ''}>


                            <input type="checkbox" checked={task.completed} /> {task.title}
                        </span>
                    </li>)
                )
            }
        </ul>
    )
}