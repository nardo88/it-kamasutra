import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getProfilePage, getProfileThunkCreator } from '../../redux/reducer-profilePage'
import { withRouter } from 'react-router-dom'

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

const mapStateToProps = (state) => {
    
    return {
        profile: state.profilePage.profile
    }
}

const ProfileWithRouter = withRouter(ProfileContainerClass)

const ProfileContainer = connect(mapStateToProps, { getProfilePage, getProfileThunkCreator })( ProfileWithRouter )

export default ProfileContainer