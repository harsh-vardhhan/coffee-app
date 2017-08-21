import coffeeApi from '../api/coffee';
import {ADD_COFFEE, DELETE_COFFEE, EDIT_COFFEE, GET_COFFEES} from '../constants/coffee';
import type {Coffee} from '../types/Coffee';
import type {Coffees} from '../types/Coffees';

export const getCoffees = () => (
    async (dispatch) => {
        const coffees: Coffees = await coffeeApi.getCoffees();
        dispatch({type: GET_COFFEES, coffees});
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
