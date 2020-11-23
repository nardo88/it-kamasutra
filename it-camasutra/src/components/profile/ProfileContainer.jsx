import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getProfilePage, getProfileThunkCreator } from '../../redux/reducer-profilePage'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../hoc/withAuthRedirect'

import { compose } from 'redux'

class ProfileContainerClass extends React.Component {
   
    componentDidMount(){
        
        let idUser = this.props.match.params.userId
        if(!idUser){
            idUser = 2
        }
        this.props.getProfileThunkCreator(idUser)
       
    }

    render(){

        return <Profile {...this.props} />
    }
}
// вызываем hoc который в зависимости от того авторизован ли пользователь
// возвращает либо компоненту с профайлом либо redirect на login
// const AuthRedirectComponent = withAuthRedirect(ProfileContainerClass)

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}
// применяем hoc который добавляет пропсы нашей компоненте
// const ProfileWithRouter = withRouter(AuthRedirectComponent)
// создаем контейнерную компоненту conect получает компоненту после hoc withRouter
// const ProfileContainer = connect(mapStateToProps, { getProfilePage, getProfileThunkCreator })( ProfileWithRouter )

 const ProfileContainer = compose(
    connect(mapStateToProps, { getProfilePage, getProfileThunkCreator }),
    withRouter,
    withAuthRedirect
)(ProfileContainerClass)

export default ProfileContainer