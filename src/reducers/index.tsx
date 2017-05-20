import { combineReducers } from 'redux'

import * as Constants from '../constants/index'
import { ToDo, StoreState, INITIAL_STATE } from '../types/index'

const uuid = require('uuid/v4')

function tasks(tasks: ToDo[], action: any): ToDo[] {
    switch (action.type) {
        case Constants.ADD_TASK:
            return tasks.concat({ title: action.title, completed: false, id: uuid() })
        case Constants.TOGGLE_TASK:
            return tasks.map(task => {
                if (task.id === action.task) {
                    task.completed = !task.completed
                }
                return task
            })
        default:
            return tasks || INITIAL_STATE.tasks;
    }
}

function currentLabel(state: string, action: any): string {
    switch (action.type) {
        default:
            return state || INITIAL_STATE.currentLabel
    }
}

export default combineReducers<StoreState>({
    tasks,
    currentLabel,
})
