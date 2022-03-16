import {combineReducers} from 'redux';
import LoginReducer from '@Pages/Login/Reducer';

const rootReducer = combineReducers({
    ...LoginReducer
});

export default rootReducer
