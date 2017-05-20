import * as React from 'react'
import { Input } from 'semantic-ui-react'

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
        <Input
            icon='tasks'
            iconPosition='left'
            placeholder='Add tasks'
            size='medium'
            onKeyPress={handleKeyPress} />
    )
}

export default AddToDo
