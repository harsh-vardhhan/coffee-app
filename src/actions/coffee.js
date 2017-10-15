//@flow
import coffeeApi from '../api/coffee';
import {ADD_COFFEE, DELETE_COFFEE, EDIT_COFFEE, GET_COFFEES} from '../constants/coffee';
import type {Coffee} from '../types/Coffee';
import type {Coffees} from '../types/Coffees';
import type {
  GET_COFFEES_TYPE,
  ADD_COFFEE_TYPE,
  DELETE_COFFEE_TYPE,
  EDIT_COFFEE_TYPE
} from '../types/Dispatch';

export const getCoffees = () => (
    async (dispatch: GET_COFFEES_TYPE) => {
        const coffees: Coffees = await coffeeApi.getCoffeesMock();
        dispatch({type: GET_COFFEES, coffees});
    }
);

export const addCoffees = (coffee: Coffee) => (
    (dispatch: ADD_COFFEE_TYPE) => {
        dispatch({type: ADD_COFFEE, coffee});
    }
);

export const deleteCoffees = (selectedCoffee: number) => (
    (dispatch: DELETE_COFFEE_TYPE) => {
        dispatch({type: DELETE_COFFEE, selectedCoffee});
    }
);

export const editCoffees = (coffee: Coffee, selectedCoffee: number) => (
    (dispatch: EDIT_COFFEE_TYPE) => {
        dispatch({type: EDIT_COFFEE, coffee, selectedCoffee});
    }
);
