import * as React from 'react'
import * as Model from '../model'

export interface OnToggleTask {
    (id: string | undefined, checked: boolean): void
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
                    <li key={task.id}
                        onClick={(event: any) => onToggleTask(task.id, event.checked)}
                        className="todo-item">
                        <span className={task.completed ? 'completed' : ''}>
                            <input type="checkbox" checked={task.completed} /> {task.title}
                        </span>
                    </li>)
                )
            }
        </ul>
    )
}