import React from 'react'
import UserItem from './UserItem/UserItem'
import MessageItem from './MessageItem/MessageItem'
import './Dialogs.css'
import { Field, reduxForm } from 'redux-form'


const Dialogs = (props) => {

  const dialogs = props.state.dialogData.map(item => <UserItem name={item.name} key={item.id} id={item.id} />)

  const messages = props.state.messagesData.map(item => <MessageItem key={item.id} message={item.message} />)

  let addNewMessage = (data) => {
      props.sendMessage(data.messageText)
  }



  return (
    <div className="content">
      <div className="contentWrapper">
        <div className="users">
          <ul className="users__list">
            {dialogs}
          </ul>
        </div>
        <div className="messages">

          <ul className="messages__list">
            {messages}
          </ul>
          <div className="newMesage">


            <AddMessageReduxForm onSubmit={addNewMessage} />


          </div>
        </div>
      </div>
    </div>
  )
}


const AddMessageForm = (props) => {
  return (
    <form className="newMesage" onSubmit={props.handleSubmit}>

      <Field component={'textarea'} name="messageText" placeholder="Введите новое сообщение" />

      <button className="sendMesage" >Отправить</button>
    </form>
  )
}

const AddMessageReduxForm = reduxForm({
  form: 'addMessageForm'
})(AddMessageForm)

export default Dialogs