import * as reducers from './reducers'
import { createStore, combineReducers } from "redux";

export default createStore(combineReducers({
    ...reducers,
}))