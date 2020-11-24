import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfilePage from './ProfilePage/ProfilePage'


const Profile = (props) => {
    return (
      <div className="content">
         
        <ProfilePage profile={props.profile} status={props.status} changeStatus={props.updateProfileStatusThunk} />
        <MyPostsContainer />
      </div>

  )
}

export default Profile