import React, {useState} from 'react'
import styles from './ProfilePage.module.css'
import Preloader from '../../common/preloader'
import defaultAvatar from './img/avatar.gif'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'



const ProfilePage = (props) => {
    // показатель отображения либо формы с изменением данных, либо самих данных
    let [editMode, setEditMode] = useState(false);

   

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

                    {
                        editMode ? <ProfileDataForm profile={props.profile} setEditMode={setEditMode} changeFullName={props.changeFullName} changeLookingJob={props.changeLookingJob} changeAboutMe={props.changeAboutMe} changeSkills={props.changeSkills} changeProfileData={props.changeProfileData}/> 
                            : <ul className={styles.listInfo}>
                                {/* Кнопка редактирования данных Если мы хозяева страницы то можем редектировать данные*/}
                                { !props.isOwner &&   <li> <button onClick={() => setEditMode(true)} >Редактировать</button> </li>}

                                {/* Данные пользователя */}
                                {/* Имя */}
                                <li className={styles.name}> <span className={styles.atributeName}>name: </span> {props.profile.fullName}</li>
                                {/* Статус */}
                                <li className={styles.status}><span>status</span> <ProfileStatusWithHooks status={props.status} changeStatus={props.changeStatus} /></li>
                                {/* Нужна ли работа */}
                                <li className={styles.job} title={props.profile.lookingForAJobDescription}> {props.profile.lookingForAJob ? `looking for a job` : `I don't need a JOB`} </li>
                                {/* если нужна то какие у меня скилы */}
                                <li className={styles.job} title={props.profile.lookingForAJobDescription}> {props.profile.lookingForAJob && <div>`My professional skils ${props.profile.lookingForAJobDescription} `</div>} </li>
                                {/* обомне */}
                                <li className={styles.info}> <span className={styles.atributeName}>about: </span> {props.profile.aboutMe ? props.profile.aboutMe : 'Не указано'}</li>
                                {/* Контакты */}
                                <li>
                                    <div>
                                        <b>Contacts</b>
                                        {Object.keys(props.profile.contacts).map(key => <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />)}
                                    </div>
                                </li>
                            </ul>
                    }
                </div>
            </div>
        </div>
    )
    
}


// компонента для отрисовки формы редактирования данных
const ProfileDataForm = ({setEditMode, profile, changeFullName, changeLookingJob, changeAboutMe, changeSkills, changeProfileData}) => {
    const name = React.createRef();
    const job = React.createRef();
    const aboutMe = React.createRef();
    const skils = React.createRef();

    const sendData = () => {
        const data = {
            aboutMe: aboutMe.current.value,
            fullName: name.current.value,
            lookingForAJobDescription: skils.current.value,
            lookingForAJob: job.current.checked,
    
        }
        console.log(data);
        changeProfileData(data);
        setEditMode(false);
    }

    const changeFullNameValue = (e) => {
        changeFullName(e.target.value)

    }

    const onChangeLookJob = (e) => {
        changeLookingJob(e.target.checked);
    }
    const onChangeAbouMe = (e) => {
        changeAboutMe(e.target.value);
    }

    const onChangeSkills = (e) => {
        changeSkills(e.target.value);
    }

    return (
        <>
            <div>
                <div><button onClick={sendData} >Сохранить</button></div>
                <ul className={styles.listInfo}>
                    <li> <span>полное имя</span>: <input ref={name} onChange={changeFullNameValue} value={profile.fullName} type="text"/></li>
                    <li> <span>do you need a job?</span>: <input ref={job} onChange={onChangeLookJob} checked={profile.lookingForAJob} type="checkbox"/></li>
                    <li> <span>about me</span>: <textarea ref={aboutMe} onChange={onChangeAbouMe} value={profile.aboutMe ? profile.aboutMe : ''} /> </li>
                    <li> <span>my skils</span>: <textarea ref={skils} onChange={onChangeSkills} value={profile.lookingForAJobDescription ? profile.lookingForAJobDescription : ''} /> </li>
                </ul>
            </div>
        </>
    ) 
}

// компонента которая отрисовывает список контактов
const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}


export default ProfilePage