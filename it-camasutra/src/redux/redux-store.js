import { combineReducers, createStore } from 'redux'
import reduserMessagesPage from './reducer-messagesPage'
import reducerProfilePage from './reducer-profilePage'

let reducers = combineReducers({
    messagesPage: reduserMessagesPage,
    profilePage: reducerProfilePage
})



let store = createStore(reducers)

export default store