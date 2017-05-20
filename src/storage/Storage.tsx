import { StoreState, INITIAL_STATE } from '../types/index'

const LOCAL_STORAGE_KEY = '__state__'
export default class Storage {
    static load() {
        return window.localStorage.getItem(LOCAL_STORAGE_KEY) ?
            JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY)!) :
            INITIAL_STATE

    }

    static save(state: StoreState) {
        window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
    }
}