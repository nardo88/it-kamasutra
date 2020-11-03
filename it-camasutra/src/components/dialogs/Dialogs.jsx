import React from 'react'
import UserItem from './UserItem/UserItem'
import MessageItem from './MessageItem/MessageItem'
import './Dialogs.css'
import { changeMessageText, AddMessageActionCreator } from '../../redux/state'

const Dialogs = (props) => {

  

  const dialogs = props.state.dialogData.map(item => <UserItem name={item.name} id={item.id} />)
  const messages = props.state.messagesData.map(item => <MessageItem message={item.message} />)

  let messageText = React.createRef()
  
  const changeMessageTextFromComponents = () => {
    let action = changeMessageText(messageText.current.value)
    props.dispatch(action)
  }

  const sendMessage = () => {
    const action = AddMessageActionCreator(messageText.current.value)
    props.dispatch(action)

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

            <textarea ref={messageText} className="messageText" placeholder="Введите новое сообщение" onChange={changeMessageTextFromComponents} value={props.state.messageText}></textarea>

            <button className="sendMesage" onClick={sendMessage}>Отправить</button>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs