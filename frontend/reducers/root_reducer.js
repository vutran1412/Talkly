import { combineReducers } from 'redux'
import entitiesReducer from './entities_reducer'
import sessionReducer from './sessions_reducer'

export default combineReducers({
    entities: entitiesReducer,
    session: sessionReducer
})