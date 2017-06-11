export const INITIAL_STATE: StoreState = {
    currentLabel: 'Inbox',
    tasks: []
}
export interface StoreState {
    currentLabel: string;
    tasks: ToDo[];
}

export interface ToDo {
    id: string | undefined;
    title: string;
    completed: boolean;
}
