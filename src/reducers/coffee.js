export function coffee(state = [], action) {
    switch (action.type) {
    case 'GET_COFFEES':
        return action.coffee;
    default:
        return state;
    }
}