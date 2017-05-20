
export interface StoreState {
    currentLabel: string;
    tasks: ToDo[];
}

export interface ToDo {
    completed: boolean;
    title: string;
    id:number;
}
