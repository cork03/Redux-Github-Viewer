import profile from './Profile'
import issue from './Isuue'
import { combineReducers} from 'redux'

const reducer = combineReducers({
    profile,
    issue
})

export default reducer
