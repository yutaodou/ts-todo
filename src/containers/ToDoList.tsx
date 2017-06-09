import { StoreState } from '../types/index'
import { connect } from 'react-redux'

import ToDoList from '../components/ToDoList'
import * as Actions from '../actions/index'

export function mapStateToProps({ tasks = [] }: StoreState) {
    return { tasks }
}

export function mapDispatchToProps(dispatch: any) {
    return {
        onToggleTask: function(id: string){
            dispatch(Actions.toggleTask(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ToDoList)