import { combineReducers } from "redux";
import itemReducer from './item-reducer';
import userReducer from './user-reducer';

const rootReducer = combineReducers({
    itemReducer: itemReducer,
    userReducer: userReducer
});

export default rootReducer;
