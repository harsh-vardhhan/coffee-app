//@flow
import {ADD_COFFEE, DELETE_COFFEE, EDIT_COFFEE, GET_COFFEES} from '../constants/coffee';
import type {Action} from '../types/Action';
import type {Coffees} from '../types/Coffees';

export const coffeeReducer = (
  state: Coffees = [],
  {type, coffee, coffees, selectedCoffee}: Action
) => {
    switch (type) {
    case GET_COFFEES:
        return coffees;
    case ADD_COFFEE:
        return [...state, coffee];
    case DELETE_COFFEE:
        return state.filter((value, i) => i !== selectedCoffee);
    case EDIT_COFFEE:
        return state.map((value, i) => {
            if (i === selectedCoffee) {
                return {...value, ...coffee};
            }
            return value;
        });
    default:
        return state;
    }
};
