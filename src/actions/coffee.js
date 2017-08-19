import coffeeApi from '../api/coffee';
import {CoffeeTypes} from '../constants';

export const getCoffees = () => (
    async (dispatch) => {
        const coffee = await coffeeApi.getCoffees();
        dispatch({type: CoffeeTypes.GET_COFFEES, coffee});
    }
);

export const addCoffees = (coffee) => (
    async (dispatch) => {
        dispatch({type: CoffeeTypes.ADD_COFFEE, coffee});
    }
);

export const deleteCoffees = (coffee) => (
    async (dispatch) => {
        dispatch({type: CoffeeTypes.DELETE_COFFEE, coffee});
    }
);

export const editCoffees = (coffee) => (
    async (dispatch) => {
        dispatch({type: CoffeeTypes.EDIT_COFFEE, coffee});
    }
);