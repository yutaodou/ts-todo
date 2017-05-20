import LabelList from '../components/LabelList'
import { StoreState } from '../types/index'
import { connect} from 'react-redux'

export function mapStateToProps(storeState:StoreState) {
    return {
        labels: ['Inbox', 'Today', 'This Week', 'Work']
    }
}

export default connect(mapStateToProps)(LabelList);