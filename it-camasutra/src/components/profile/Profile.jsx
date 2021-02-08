import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfilePage from './ProfilePage/ProfilePage'


const Profile = (props) => {
    return (
      <div className="content">
         
        <ProfilePage isOwner={props.isOwner} profile={props.profile} status={props.status} changeStatus={props.updateProfileStatusThunk} savePhoto={props.savePhoto} changeFullName={props.changeFullName} changeLookingJob={props.changeLookingJob} changeAboutMe={props.changeAboutMe} changeSkills={props.changeSkills} changeProfileData={props.changeProfileData}/>
        <MyPostsContainer />
      </div>

  )
}

export default Profile