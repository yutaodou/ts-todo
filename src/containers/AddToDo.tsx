import AddToDo from '../components/AddToDo'
import { connect } from 'react-redux'
import * as Actions from '../actions/index'

function mapDispatchToProperty(dispatch:any) {
    return {
        onAdd: function (task: string) {
            console.log(`add task ${task}`)
            dispatch(Actions.addToDo(task))

        }
    }
}

export default connect(state => state, mapDispatchToProperty)(AddToDo)