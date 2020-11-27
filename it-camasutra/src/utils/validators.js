

export const requiredField = (value) => {
    return value ? undefined : 'Field is required'
}



// export const maxLength = (value) => {
//     return value && value.length > 30 ? 'Max length is 30 simbols'
//         : undefined
// }


export const maxLengthCreator = (num) => (value) => {
    return value && value.length > num ? 'Max length is' + num + 'simbols'
        : undefined
}