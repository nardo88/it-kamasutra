import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getProfilePage, getProfileThunkCreator, getProfileStatusThunk, updateProfileStatusThunk, savePhoto } from '../../redux/reducer-profilePage'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../hoc/withAuthRedirect'

import { compose } from 'redux'

class ProfileContainerClass extends React.Component {
    
    refreshProfile(){
        let idUser = this.props.match.params.userId
        if(!idUser){
            idUser = this.props.id
        }
        this.props.getProfileThunkCreator(idUser)
        this.props.getProfileStatusThunk(idUser)
    }
    componentDidMount(){
        this.refreshProfile()
        
    }

    componentDidUpdate(prevProps){
        if (this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile()

        }

    }

    render(){
        return <Profile {...this.props} isOwner={!!this.props.match.params.userId} savePhoto={this.props.savePhoto}  />
    }
}
// вызываем hoc который в зависимости от того авторизован ли пользователь
// возвращает либо компоненту с профайлом либо redirect на login
// const AuthRedirectComponent = withAuthRedirect(ProfileContainerClass)

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        id: state.auth.id

    }
}
// применяем hoc который добавляет пропсы нашей компоненте
// const ProfileWithRouter = withRouter(AuthRedirectComponent)
// создаем контейнерную компоненту conect получает компоненту после hoc withRouter
// const ProfileContainer = connect(mapStateToProps, { getProfilePage, getProfileThunkCreator })( ProfileWithRouter )

 const ProfileContainer = compose(
    connect(mapStateToProps, { getProfilePage, getProfileThunkCreator, getProfileStatusThunk, updateProfileStatusThunk, savePhoto }),
    withRouter,
    withAuthRedirect
)(ProfileContainerClass)

export default ProfileContainer