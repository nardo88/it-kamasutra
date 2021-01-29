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
            <div className={styles.profileInfoWrapper}>
                <div className={styles.profileImgAvatar}>
                    <img className={styles.avatarImg } src={!props.profile.photos.large ? defaultAvatar : props.profile.photos.large} alt=""/>

                    {
                    // здесь если в пропсах мы получаем id авторизованного пользователя то отображаем input
                     !props.isOwner ? <input type="file" onChange={onMainPhotoSelected} /> : ''
                    }
                    
                </div>
                <div className={styles.profileInfo}>
                    <ul className={styles.listInfo}>
                        <li className={styles.name}> <span className={styles.atributeName}>name: </span> {props.profile.fullName}</li>
                        <li className={styles.status}><span>status</span> <ProfileStatusWithHooks status={props.status} changeStatus={props.changeStatus} /></li>
                        <li className={styles.job} title={props.profile.lookingForAJobDescription}> {props.profile.lookingForAJob ? `look for a job` : `I don't need a JOB`} </li>
                        <li className={styles.info}> <span className={styles.atributeName}>about: </span> {props.profile.aboutMe ? props.profile.aboutMe : 'Не указано'}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
    
}


export default ProfilePage