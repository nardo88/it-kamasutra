import * as axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getProfilePage } from '../../redux/reducer-profilePage'
import { withRouter } from 'react-router-dom'

class ProfileContainerClass extends React.Component {
   
    componentDidMount(){
        let idUser = this.props.match.params.userId
        if(!idUser){
            idUser = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${idUser}`)
            .then(response => {
                this.props.getProfilePage(response.data)
            })
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

const ProfileContainer = connect(mapStateToProps, { getProfilePage })( ProfileWithRouter )

export default ProfileContainer