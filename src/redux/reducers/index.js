import { combineReducers } from 'redux';
import socketIo from './socketIoReducer';
const rootReducer = combineReducers({
    socketIo

});

export default rootReducer;