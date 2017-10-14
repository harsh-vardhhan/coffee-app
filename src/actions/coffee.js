//@flow
import coffeeApi from '../api/coffee';
import {ADD_COFFEE, DELETE_COFFEE, EDIT_COFFEE, GET_COFFEES} from '../constants/coffee';
import type {Coffee} from '../types/Coffee';
import type {Coffees} from '../types/Coffees';
import type {Dispatch} from 'redux';

type DispatchGetCoffees = Dispatch<{type: string, coffees: Coffees}>;
type DispatchAddCoffees = Dispatch<{type: string, coffee: Coffee}>;
type DispatchDeleteCoffees = Dispatch<{type: string, selectedCoffee: number}>;
type DispatchEditCoffees = Dispatch<{type: string, coffee: Coffee, selectedCoffee: number}>;

export const getCoffees = () => (
    async (dispatch: DispatchGetCoffees) => {
        const coffees: Coffees = await coffeeApi.getCoffeesMock();
        dispatch({type: GET_COFFEES, coffees});
    }
);

export const addCoffees = (coffee: Coffee) => (
    (dispatch: DispatchAddCoffees) => {
        dispatch({type: ADD_COFFEE, coffee});
    }
);

export const deleteCoffees = (selectedCoffee: number) => (
    (dispatch: DispatchDeleteCoffees) => {
        dispatch({type: DELETE_COFFEE, selectedCoffee});
    }
);

export const editCoffees = (coffee: Coffee, selectedCoffee: number) => (
    (dispatch: DispatchEditCoffees) => {
        dispatch({type: EDIT_COFFEE, coffee, selectedCoffee});
    }
);
