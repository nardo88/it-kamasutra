import reducerProfilePage from './reducer-profilePage'
import reduserMessagesPage from './reducer-messagesPage'



const store = {
    // Сам state
    state: {
        // страница с постами
        profilePage: {
            // посты
            postsData: [{
                    id: 1,
                    message: 'Hi, how are you?',
                    likesCount: 12
                },
                {
                    id: 2,
                    message: 'it is my first post',
                    likesCount: 11
                },
                {
                    id: 3,
                    message: "I'm back",
                    likesCount: 8
                },
                {
                    id: 3,
                    message: "I'm back",
                    likesCount: 8
                },
            ],
            // переменная для изменения текста в textarea
            newPostText: ""
        },
        // страница с сообщениями
        messagesPage: {
            // список с кем переписываемся
            dialogData: [{
                    id: 1,
                    name: 'Дмитрий'
                },
                {
                    id: 2,
                    name: 'Ольга'
                },
                {
                    id: 3,
                    name: 'Максим'
                },
                {
                    id: 4,
                    name: 'Мария'
                },
                {
                    id: 5,
                    name: 'Александр'
                },
            ],
            // список сообщений
            messagesData: [{
                    id: 1,
                    message: 'Hi!'
                },
                {
                    id: 2,
                    message: 'How are you?'
                },
                {
                    id: 3,
                    message: 'i want to sleep'
                },
                {
                    id: 4,
                    message: 'By!'
                },
            ],
            messageText: ''
        }
    },

    
    dispatch(action) {
        // здесь мы обращаемся к определнному участку (ветки state) и помещаем в него
        // результат который нам отретернит reducer. На вход reducer даем этот же участок (ветку)
        // state и action который dispatch получил в качестве аргумента
        this.state.profilePage = reducerProfilePage( this.state.profilePage, action)
        // на каждый участок state который изменяется есть свой reducer
        this.state.messagesPage = reduserMessagesPage( this.state.messagesPage, action)
        // в конце запускаем функцию которая перерендеривает страницу
        this.callSubscriber( this.state)
    },

    // функция затычка
    callSubscriber() {
        console.log(this);
    },
    subscribe(observer) {
        this.callSubscriber = observer
    }
}






export default store