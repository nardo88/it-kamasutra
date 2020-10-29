import { renderDom } from '../render.js'


let state = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'it is my first post', likesCount: 11},
            {id: 3, message: "I'm back", likesCount: 8},
            {id: 3, message: "I'm back", likesCount: 8},
        ],
    },
    messagesPage: {
        dialogData: [
            { id: 1, name: 'Дмитрий' },
            { id: 2, name: 'Ольга' },
            { id: 3, name: 'Максим' },
            { id: 4, name: 'Мария' },
            { id: 5, name: 'Александр' },
        ],
        
        messagesData: [
            { id: 1, message: 'Hi!' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'i want to sleep' },
            { id: 4, message: 'By!' },
        ],
    }
}

export const addPost = (message) => {
    let post = {
        id: 5,
        message: message,
        likesCount: 0
    }

    state.profilePage.postsData.push(post)
    renderDom(state)
}

export default state
