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

export const deleteCoffees = (selectedCoffee: number) => (
    (dispatch) => {
        dispatch({type: DELETE_COFFEE, selectedCoffee});
    }
);

export const editCoffees = (coffee: Coffee, selectedCoffee: number) => (
    (dispatch) => {
        dispatch({type: EDIT_COFFEE, coffee, selectedCoffee});
    }
);
