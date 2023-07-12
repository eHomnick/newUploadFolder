import {createStore ,combineReducers} from 'redux'
import userReducer from './reducers/userReducer'
import employeeReducer from './reducers/employeeReducer'






const reducer = combineReducers({
    user: userReducer,
    // employee: employeeReducer
})


const store = createStore(reducer)
window.store = store
export default store