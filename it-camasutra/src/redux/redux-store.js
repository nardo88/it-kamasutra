import { applyMiddleware, combineReducers, createStore } from 'redux'
import reduserMessagesPage from './reducer-messagesPage'
import reducerProfilePage from './reducer-profilePage'
import reduserUsers from './reducer-users'
import reducerAuth from './reducer-auth'

import {reducer as formReducer} from 'redux-form'

import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    messagesPage: reduserMessagesPage,
    profilePage: reducerProfilePage,
    usersPage: reduserUsers,
    auth: reducerAuth,
    form: formReducer
})



let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store