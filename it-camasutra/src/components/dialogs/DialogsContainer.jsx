import { connect } from 'react-redux'
import { changeMessageText, AddMessageActionCreator } from '../../redux/reducer-messagesPage'
import Dialogs from './Dialogs'
import { withAuthRedirect } from '../hoc/withAuthRedirect'
import { compose } from 'redux'



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


// нам нужно отрисовать компоненту dialogs
// сначала мы ее оборачивали в ХОК withAuthRedirect
// let AuthRedirectComponent = withAuthRedirect(Dialogs)
// затем оборачивали результат в connect что бы прокинуть callback и state
// const DialogsContainer = connect(mapStateToProps, maoDispatchToProps)(AuthRedirectComponent)

// теперь просто по деффолту возвращаем компоненту
// которую с помощью compose протаскиваем через ХОКИ
// читаем снизу вверх
export default compose(
  // и только затем через connect
  connect(mapStateToProps, maoDispatchToProps),
  // сначала протаскиваем через хок withAuthRedirect
  withAuthRedirect
  // компоненту dialogs
)(Dialogs)



