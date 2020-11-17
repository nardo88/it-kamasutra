import * as axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getProfilePage } from '../../redux/reducer-profilePage'

class ProfileContainerClass extends React.Component {

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

const ProfileContainer = connect(mapStateToProps, { getProfilePage })(ProfileContainerClass)

export default ProfileContainer