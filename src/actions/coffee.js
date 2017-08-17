import coffeeApi from '../api/coffee';

export function getCoffees() {
    return async (dispatch) => {
        const coffee = await coffeeApi.getCoffees();
        return dispatch({type: 'GET_COFFEES', coffee});
    };
}