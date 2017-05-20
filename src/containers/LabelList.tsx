import LabelList from '../components/LabelList'
import { StoreState } from '../types/index'
import { connect} from 'react-redux'

export function mapStateToProps({currentLabel}:StoreState) {
    return {
        labels: ['Inbox', 'Today', 'This Week', 'Work'],
        currentLabel
    }
}

export default connect(mapStateToProps)(LabelList);
