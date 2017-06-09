import * as React from 'react'

export interface OnAdd {
    (title: string): void
}

export interface Props {
    onAdd: OnAdd
}

function AddToDo({ onAdd }: Props) {
    function handleKeyPress(e: any) {
        if (e.key === 'Enter') {
            onAdd(e.target.value)
            e.target.value = ''
        }
    }
    return (
        <div className="container add-todo-container">
            <input className="add-todo" type="text" placeholder="new task here" onKeyPress={handleKeyPress}/>
        </div>
    )
}

export default AddToDo
