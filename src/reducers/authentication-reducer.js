let user = JSON.parse(localStorage.getItem('authentication'));
const initialState = user ? { user } : {};

export function authentication(state = initialState, action) {
    if (action.type === 'LOGIN') {
        return {authentication: action.authentication};
    } else {
        return state;
    }
}
