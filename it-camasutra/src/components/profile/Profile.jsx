import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import styles from './Profile.module.css'


const Profile = (props) => {
    return (
      <div className="content">
        <img className={styles.headerImg} src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" alt=""/>

        <MyPostsContainer store={props.store} />
      </div>

  )
}

export default Profile