import {combineReducers} from 'redux';
import commentsReducer from 'reducers/commets';

export default combineReducers({
    comments: commentsReducer
});