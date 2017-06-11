import { StoreState } from '../model';
import { connect } from 'react-redux'

import ToDoList from '../components/ToDoList'
import * as Actions from '../actions/index'

export function mapStateToProps({ tasks = [] }: StoreState) {
    return { tasks }
}

export function mapDispatchToProps(dispatch: any) {
    return {
        onToggleTask: function (id: string, checked: boolean) {
            dispatch(Actions.toggleTask(id, checked))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)