
import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { logOut} from '../../redux/reducer-auth'

// классовая компонента
class HeaderContainer extends React.Component {
    
    // отрисовываем компоненту
    render(){
        return <Header {...this.props} />
    }
}
// пропсы для классовой компоненты
const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        auth: state.auth
    }
}

// создаем контейнерную компоненту
export default connect(mapStateToProps, { logOut })(HeaderContainer)