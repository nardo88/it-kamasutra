import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import styles from './Profile.module.css'


const Profile = (props) => {
    return (
      <div className="content">
        <img className={styles.headerImg} src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" alt=""/>

        <MyPosts postsData={props.state.postsData} newPostText={props.state.newPostText} dispatch={props.dispatch}/>
      </div>

  )
}

export default Profile