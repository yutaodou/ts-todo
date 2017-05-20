import { StoreState } from '../types/index'

export function reducers(state: StoreState, action: any): StoreState {
    switch (action.type) {
        default:
            return { ...state };
    }
} 