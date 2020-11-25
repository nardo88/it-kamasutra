export const requiredField = (value) => {
    return value ? undefined : 'Field is required'
}

export const maxLength = (value) => {
    return value && value.length > 30 ? 'Max length is 30 simbols'
        : undefined
}