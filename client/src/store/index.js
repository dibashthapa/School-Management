import {
    createStore ,
    applyMiddleware,
    combineReducers,
    compose 
} from 'redux';
import { loginReducer , registerReducer } from './reducers/'
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    combineReducers({
        loginReducer, registerReducer
    }),
    composeEnhancer(applyMiddleware(thunk))
)

export default store