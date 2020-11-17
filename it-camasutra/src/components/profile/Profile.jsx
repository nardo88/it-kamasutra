import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfilePage from './ProfilePage/ProfilePage'


const Profile = (props) => {
    console.log(props);  
    return (
      <div className="content">
        
        <ProfilePage profile={props.profile} />
        <MyPostsContainer />
      </div>

  )
}

export default Profile