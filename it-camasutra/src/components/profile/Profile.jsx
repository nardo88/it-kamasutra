import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import styles from './Profile.module.css'


const Profile = () => {

    return (
      <div className="content">
        <img className={styles.headerImg} src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" alt=""/>


        <MyPosts />
      </div>

  )
}

export default Profile