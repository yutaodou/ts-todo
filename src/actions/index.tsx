import * as Constants from '../constants/index'
import { Storage } from '../storage'

export function addToDo(title: string) {
    return (dispatch: any) => {
        Storage.addToDo({
            title: title,
            id: undefined,
            completed: false
        }).then(todo => {
            console.log("here");
            dispatch({
                type: Constants.ADD_TASK,
                task: todo
            })
        })
    }
}

export function changeLabel(label: string) {
    return {
        type: Constants.CHANGE_LABEL,
        label
    }
}

export function toggleTask(id: string) {
    return {
        type: Constants.TOGGLE_TASK,
        task: id
    }
}