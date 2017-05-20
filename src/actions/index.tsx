import * as Constants from '../constants/index'

export function addToDo(title: string) {
    return {
        type: Constants.ADD_TASK,
        title
    }
}

export function changeLabel(label: string) {
    return {
        type: Constants.CHANGE_LABEL,
        label
    }
}


export function toggleTask(id:string){
    return {
        type: Constants.TOGGLE_TASK,
        task: id
    }
}