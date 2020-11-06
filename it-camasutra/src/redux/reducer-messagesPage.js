
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

    // сверяем со значением action.type
    switch (action.type) {
        // если значение = CHANGE_MESSAGE_TEXT
        case CHANGE_MESSAGE_TEXT:
            // выполняем этот участо кода который изменяет state
            state.messageText = action.text
            // и возвращаем измененный state
            return state;
        // если значение = ADD_MESSAGE 
        case ADD_MESSAGE:
            // то выполняем уже вот этот участок кода который изменяет state 
            let messageItem = {
                id:state.messagesData.length + 1,
                message: action.message,
            }
            state.messagesData.push(messageItem)
            state.messageText = ''
            // и возвращаем измененный state
            return state;
        // если ни одно из значений не подошло
        default:
            // просто возвращаем state
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