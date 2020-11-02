

const store = {
    // Сам state
    state : {
        // страница с постами
        profilePage: {
            // посты
            postsData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'it is my first post', likesCount: 11},
                {id: 3, message: "I'm back", likesCount: 8},
                {id: 3, message: "I'm back", likesCount: 8},
            ],
            // переменная для изменения текста в textarea
            newPostText: "default"
        },
        // страница с сообщениями
        messagesPage: {
            // список с кем переписываемся
            dialogData: [
                { id: 1, name: 'Дмитрий' },
                { id: 2, name: 'Ольга' },
                { id: 3, name: 'Максим' },
                { id: 4, name: 'Мария' },
                { id: 5, name: 'Александр' },
            ],
            // список сообщений
            messagesData: [
                { id: 1, message: 'Hi!' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'i want to sleep' },
                { id: 4, message: 'By!' },
            ],
        }
    },
    // Метод добавления поста
    addPost(message) {
        // создаем новый пост
        let post = {
            id: 5,
            message: message,
            likesCount: 0
        }
        //  пушим его в state
        this.state.profilePage.postsData.push(post)
        // обновляем страницу (ререндер)
        this.callSubscriber(this.state)
    },

    // метод изменения textarea FLUX в постах
    addPostText (text){
        this.state.profilePage.newPostText = text
        this.callSubscriber(this.state)
    },
    // функция затычка
    callSubscriber(){
        console.log(this);
    },
    subscribe(observer){
        this.callSubscriber = observer
    }
}

export default store
