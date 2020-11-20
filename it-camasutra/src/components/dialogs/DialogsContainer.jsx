import { connect } from 'react-redux'
import { changeMessageText, AddMessageActionCreator } from '../../redux/reducer-messagesPage'
import Dialogs from './Dialogs'
import { withAuthRedirect } from '../hoc/withAuthRedirect'



const mapStateToProps = state =>{
  return {
      state: state.messagesPage,
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


let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, maoDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer



