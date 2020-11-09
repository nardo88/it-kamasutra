import React from 'react'
import { connect } from 'react-redux'
import { changeMessageText, AddMessageActionCreator } from '../../redux/reducer-messagesPage'
import Dialogs from './Dialogs'


const mapStateToProps = state =>{
  return {
      state: state.messagesPage
  }
}

const maoDispatchToProps = dispatch =>{
  return {
    changeInputValue: (value) => {
          dispatch(changeMessageText(value))
      },
      sendMessage: (value) => {
          dispatch(AddMessageActionCreator(value))
      }
  }
}


const DialogsContainer = connect(mapStateToProps, maoDispatchToProps)(Dialogs)

export default DialogsContainer