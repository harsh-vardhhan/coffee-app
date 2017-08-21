import coffeeApi from '../api/coffee';
import {ADD_COFFEE, DELETE_COFFEE, EDIT_COFFEE, GET_COFFEES} from '../constants/coffee';

type Coffee = {
    name: string,
    price: string
};

export const getCoffees = () => (
    async (dispatch) => {
        const coffee = await coffeeApi.getCoffees();
        dispatch({type: GET_COFFEES, coffee});
    }
);

export const addCoffees = (coffee: Coffee) => (
    (dispatch) => {
        dispatch({type: ADD_COFFEE, coffee});
    }
);

export const deleteCoffees = (coffee: number) => (
    (dispatch) => {
        dispatch({type: DELETE_COFFEE, coffee});
    }
);

export const editCoffees = (coffee: Coffee) => (
    (dispatch) => {
        dispatch({type: EDIT_COFFEE, coffee});
    }
);
