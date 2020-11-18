
import * as axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import {setAuthData} from '../../redux/reducer-auth'

// классовая компонента
class HeaderContainer extends React.Component {
    // после монтажа делаем запрос на сервер
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            // доп параметр GET запроса что бы выплнился КРОССДОМЕННЫЙ запрос
            withCredentials: true
        }).then(response => {
            // применяем диструктуризацию
            const {id, email, login} = response.data.data
            // вызываем callBack из контейнерной компоненты
            this.props.setAuthData(id, email, login)
        })
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
export default connect(mapStateToProps, { setAuthData })(HeaderContainer)