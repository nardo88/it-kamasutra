import { combineReducers, createStore } from 'redux'
import reduserMessagesPage from './reducer-messagesPage'
import reducerProfilePage from './reducer-profilePage'
import reduserUsers from './reducer-users'
import reducerAuth from './reducer-auth'

let reducers = combineReducers({
    messagesPage: reduserMessagesPage,
    profilePage: reducerProfilePage,
    usersPage: reduserUsers,
    auth: reducerAuth
})



let store = createStore(reducers)

window.store = store

export default store