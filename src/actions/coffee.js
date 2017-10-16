//@flow
import {getCoffeesMock} from '../api/coffee';
import {GET_COFFEES, ADD_COFFEE, DELETE_COFFEE, EDIT_COFFEE} from '../constants/coffee';
import type {Coffee} from '../types/Coffee';
import type {Coffees} from '../types/Coffees';
import type {Dispatch} from 'redux';
import type {Action} from '../types/Action';

export const getCoffees = () => (
    async (dispatch: Dispatch<Action>) => {
        const coffees: Coffees = await getCoffeesMock();
        dispatch({type: GET_COFFEES, coffees});
    }
);

export const addCoffees = (coffee: Coffee) => (
    (dispatch: Dispatch<Action>) => {
        dispatch({type: ADD_COFFEE, coffee});
    }
);

export const deleteCoffees = (selectedCoffee: number) => (
    (dispatch: Dispatch<Action>) => {
        dispatch({type: DELETE_COFFEE, selectedCoffee});
    }
);

export const editCoffees = (coffee: Coffee, selectedCoffee: number) => (
    (dispatch: Dispatch<Action>) => {
        //$FlowFixMe
        dispatch({type: EDIT_COFFEE, coffee, selectedCoffee});
    }
);
