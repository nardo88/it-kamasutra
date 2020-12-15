import React from 'react'
import styles from './ProfilePage.module.css'
import Preloader from '../../common/preloader'
import defaultAvatar from './img/avatar.gif'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'



const ProfilePage = (props) => {
    
    if(!props.profile){
        return <Preloader />
    } 
    // функция на onChange input type file
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length){
            // в колбек передаем наш файл
            props.savePhoto(e.target.files[0]);
        }
    }

    return(
        
        <div className="profilePageWrapper">
            <img className={styles.headerImg} src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" alt=""/>
            <div className={styles.profileInfoWrapper}>
                <div className={styles.profileImgAvatar}>
                    <img className={styles.avatarImg } src={!props.profile.photos.large ? defaultAvatar : props.profile.photos.large} alt=""/>
                    {
                     !props.isOwner ? <input type="file" onChange={onMainPhotoSelected} /> : ''
                    }
                </div>
                <div className={styles.profileInfo}>
                    <ul className={styles.listInfo}>
                        <li className={styles.name}> <span className={styles.atributeName}>Имя: </span> {props.profile.fullName}</li>
                        <li className={styles.status}> <ProfileStatusWithHooks status={props.status} changeStatus={props.changeStatus} /></li>
                        <li className={styles.job} title={props.profile.lookingForAJobDescription}> {props.profile.lookingForAJob ? `look for a job` : `I don't need a JOB`} </li>
                    </ul>
                </div>
            </div>
        </div>
    )
    
}


export default ProfilePage