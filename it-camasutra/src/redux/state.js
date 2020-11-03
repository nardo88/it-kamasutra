const ADD_POST = "ADD-POST"
const ADD_POST_TEXT = "ADD-POST-TEXT"
const CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT"
const ADD_MESSAGE = "ADD-MESSAGE"

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

    // метод dispatch в state
    // метод имеет аргумент action который является объектом
    dispatch(action) {
        // если свойство type объекта action равно строке  'ADD-POST'
        if (action.type === ADD_POST) {
            // то выполняется одна логика
            // например создаем новый пост
            let post = {
                id: 5,
                message: action.message,
                likesCount: 0
            }
            //  пушим его в state
            this.state.profilePage.postsData.push(post)
            // после чего обновляем страницу (ререндер)
            this.callSubscriber(this.state)
            // Если type равен другой строке
        } else if (action.type === ADD_POST_TEXT) {
            // выполняем другую логику
            this.state.profilePage.newPostText = action.text
            this.callSubscriber(this.state)

        } else if (action.type === CHANGE_MESSAGE_TEXT) {
            this.state.messagesPage.messageText = action.text
            this.callSubscriber(this.state)
        } else if (action.type === ADD_MESSAGE){
            let messageItem = {
                id: this.state.messagesPage.messagesData.length+1,
                message: action.message,
            }
            this.state.messagesPage.messagesData.push(messageItem)
            this.state.messagesPage.messageText = ''
            this.callSubscriber(this.state)
        }
    },

    // функция затычка
    callSubscriber() {
        console.log(this);
    },
    subscribe(observer) {
        this.callSubscriber = observer
    }
}


export const addPostActionCreater = (message) => {
    return {
        type: ADD_POST,
        message: message
    }
}

export const postChangeActionCreator = (message) => {
    return {
        type: ADD_POST_TEXT,
        message: message
    }
}

export const changeMessageText = (text) => {
    return {
        type: CHANGE_MESSAGE_TEXT,
        text: text
    }
}

export const AddMessageActionCreator = (message) => {
    return {
        type: ADD_MESSAGE,
        message: message
    }
}

export default store