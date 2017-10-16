//@flow
import {
  ADD_COFFEE,
  DELETE_COFFEE,
  EDIT_COFFEE,
  GET_COFFEES
} from '../constants/coffee';
import type {Action} from '../types/Action';
import type {Coffees} from '../types/Coffees';

export const coffeeReducer = (
  state: Coffees = [],
  action : Action
) => {
    switch (action.type) {
    case GET_COFFEES:
        return action.coffees;
    case ADD_COFFEE:
        return [...state, action.coffee];
    case DELETE_COFFEE:
        const selectedCoffee = action.selectedCoffee;
        return state.filter((value, i) => i !== selectedCoffee);
    case EDIT_COFFEE:
        const coffee = action.coffee;
        return state.map((value, i) => {
            if (i === action.selectedCoffee) {
                return {...value, ...coffee};
            }
            return value;
        });
    default:
        return state;
    }
};
