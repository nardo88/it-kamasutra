import React from 'react'
import { changeMessageText, AddMessageActionCreator } from '../../redux/reducer-messagesPage'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {
  
  const changeMessageTextFromComponents = (value) => {
    let action = changeMessageText(value)
    props.store.dispatch(action)
  }

  const sendMessage = (value) => {
      const action = AddMessageActionCreator(value)
      props.store.dispatch(action)
      
  }
  

  return (
   <Dialogs state={props.store.getState().messagesPage} changeInputValue={changeMessageTextFromComponents} sendMessage={sendMessage}/>
  )
}

export default DialogsContainer