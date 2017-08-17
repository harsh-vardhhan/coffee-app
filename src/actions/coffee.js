import coffeeApi from '../api/coffee';
import {CoffeeTypes} from '../constants';

export const getCoffees = () => (
    async (dispatch) => {
        const coffee = await coffeeApi.getCoffees();
        dispatch({type: CoffeeTypes.GET_COFFEES, coffee});
    }
);