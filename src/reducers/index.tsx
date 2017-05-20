import { StoreState } from '../types/index'
import * as Constants from '../constants/index'

const uuid = require('uuid/v4')

export function reducers(state: StoreState, action: any): StoreState {
    switch (action.type) {
        case Constants.ADD_TASK:
            return {
                ...state,
                tasks: state.tasks.concat({ title: action.title, completed: false, id: uuid() })
            }
        default:
            return { ...state };
    }
} 