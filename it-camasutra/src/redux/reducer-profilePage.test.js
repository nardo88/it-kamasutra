
import   reducerProfilePage, { addPostActionCreater }  from "./reducer-profilePage";

 // 1. инициализация данных
let action = addPostActionCreater('New post');
let state = {
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
              
    ],
}


it ('count posts should be four', () => {
    // 2. action 
    let newState = reducerProfilePage(state, action)
  
    // 3. expectation
    expect( newState.postsData.length ).toBe(4);
});

it ('Message text shoul be correctly', () => {
    // 2. action 
    let newState = reducerProfilePage(state, action)
  
    // 3. expectation
    expect( newState.postsData[3].message).toBe('New post');
});


