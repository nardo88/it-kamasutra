import React from 'react'
import UserItem from './UserItem/UserItem'
import MessageItem from './MessageItem/MessageItem'
import './Dialogs.css'
import { Field, reduxForm } from 'redux-form';
import style from './Dialogs.module.css';


const Dialogs = (props) => {

  const dialogs = props.state.dialogData.map(item => <UserItem name={item.name} key={item.id} id={item.id} />)

  const messages = props.state.messagesData.map(item => <MessageItem key={item.id} message={item.message} />)

  let addNewMessage = (data) => {
      if (data.messageText){
        props.sendMessage(data.messageText)
      }
  }



  return (
    <div className="content">
      <div className={style.contentWrapper}>
        <div className={style.users}>
          <ul className={style.users__list}>
            {dialogs}
          </ul>
        </div>
        <div className={style.messages}>

          <ul className={style.messages__list}>
            {messages}
          </ul>
          <div className={style.newMesage}>
            <AddMessageReduxForm onSubmit={addNewMessage} />
          </div>
        </div>
      </div>
    </div>
  )
}


const AddMessageForm = (props) => {
  
  return (
    <form className={style.newMesageForm} onSubmit={props.handleSubmit}>
      <Field className={style.textArea} component={'textarea'} name="messageText" placeholder="Введите новое сообщение" />
      <button className={style.sendMesage} >Send</button>
    </form>
  )
}

const AddMessageReduxForm = reduxForm({
  form: 'addMessageForm'
})(AddMessageForm)

export default Dialogs