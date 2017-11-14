//@flow
import type {
    GET_COFFEES_ACTION,
    ADD_COFFEE_ACTION,
    DELETE_COFFEE_ACTION,
    EDIT_COFFEE_ACTION
  } from '../types/Action';

import type {Coffee} from '../types/Coffee';

export type AppState = {
    name: string,
    price: number,
    selectedCoffee: number
};

export type Props = {
    coffee: Array<{
        name: string,
        price: number
    }>,
    actions: {
      getCoffees: () => GET_COFFEES_ACTION,
      deleteCoffees: (number) => DELETE_COFFEE_ACTION,
      editCoffees: (Coffee, number) => EDIT_COFFEE_ACTION,
      addCoffees: (Coffee) => ADD_COFFEE_ACTION,
    }
};

