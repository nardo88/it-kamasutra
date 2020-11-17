import { combineReducers, createStore } from 'redux'
import reduserMessagesPage from './reducer-messagesPage'
import reducerProfilePage from './reducer-profilePage'
import reduserUsers from './reducer-users'

let reducers = combineReducers({
    messagesPage: reduserMessagesPage,
    profilePage: reducerProfilePage,
    usersPage: reduserUsers
})



let store = createStore(reducers)

window.store = store

export default store