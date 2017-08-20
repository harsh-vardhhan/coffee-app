import coffeeApi from '../api/coffee';
import {CoffeeTypes} from '../constants';

type Coffee = {
    name: string,
    price: string
};

export const getCoffees = () => (
    async (dispatch) => {
        const coffee = await coffeeApi.getCoffees();
        dispatch({type: CoffeeTypes.GET_COFFEES, coffee});
    }
);

export const addCoffees = (coffee: Coffee) => (
    async (dispatch) => {
        dispatch({type: CoffeeTypes.ADD_COFFEE, coffee});
    }
);

export const deleteCoffees = (coffee: number) => (
    async (dispatch) => {
        dispatch({type: CoffeeTypes.DELETE_COFFEE, coffee});
    }
);

export const editCoffees = (coffee: Coffee) => (
    async (dispatch) => {
        dispatch({type: CoffeeTypes.EDIT_COFFEE, coffee});
    }
);
