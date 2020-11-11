
const CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT"
const ADD_MESSAGE = "ADD-MESSAGE"

let initialState = {
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

const reduserMessagesPage = (state = initialState, action) => {
    switch (action.type) {
        // так как мы тут создаем переменные, лучше блок case
        // оборачивать в фигурные скобки
        case CHANGE_MESSAGE_TEXT:{
            // создаем копию state
            let stateCopy = {...state}
            // именно в копию помещаем новое значение
            stateCopy.messageText = action.text
            // и возвращаем копию state
            return stateCopy;
        }
        // во втором случае action
        case ADD_MESSAGE:{
            // создаем объект с новым значением
            let messageItem = {
                id:state.messagesData.length + 1,
                message: action.message,
            }
            // делаем копию state
            let stateCopy = {...state}
            // делаем глубокую копию state, т.е. копируем и сам массив
            stateCopy.messagesData = [...state.messagesData]
            // пушим новый объект уже в новый массив (в копию)
            stateCopy.messagesData.push(messageItem)
            // обнуляем поле input
            stateCopy.messageText = ''
            // и возвращаем копию state
            return stateCopy;
        }   
        default:
            return state;
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
export default reduserMessagesPage