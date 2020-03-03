import { combineReducers } from 'redux';
import  videosReducer  from './reducers/dataReducers.js';

const rootReducer = combineReducers({
 result: videosReducer
})

export default rootReducer;