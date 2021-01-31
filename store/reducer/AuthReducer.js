const AuthReducer = (state = {
    userData: {}
}, action) => {
    switch (action.type) {
        case 'ADD_USER_DATA':
            return {
                ...state,
                userData: action.payload
            }
        default:
            return state
    }
}
export default AuthReducer