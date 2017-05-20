import ToDoList from '../components/ToDoList'
import { StoreState } from '../types/index'
import { connect } from 'react-redux'

export function mapStateToProps({ tasks = [] }: StoreState) {
    return { tasks }
}
export default connect(mapStateToProps)(ToDoList)