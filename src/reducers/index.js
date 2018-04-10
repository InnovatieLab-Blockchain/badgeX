import App from './AppReducer'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({App, form: formReducer})

export default rootReducer
