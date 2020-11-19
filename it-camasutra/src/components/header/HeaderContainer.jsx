
import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { setAuthDataThunkCreator} from '../../redux/reducer-auth'

// классовая компонента
class HeaderContainer extends React.Component {
    // после монтажа делаем запрос на сервер
    componentDidMount(){
        // вызываем thunk для получения данных если мы авторизованы
        this.props.setAuthDataThunkCreator()
    
    }
    // отрисовываем компоненту
    render(){
        return <Header {...this.props} />
    }
}
// пропсы для классовой компоненты
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
// создаем контейнерную компоненту
export default connect(mapStateToProps, {  setAuthDataThunkCreator })(HeaderContainer)