import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';
import { fireStoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: fireStoreReducer
});

export default rootReducer;
