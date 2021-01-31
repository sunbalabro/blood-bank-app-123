import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import BloodReducer from './BloodReducer'
 


const rootReducer = combineReducers({BloodReducer,AuthReducer})
export default rootReducer