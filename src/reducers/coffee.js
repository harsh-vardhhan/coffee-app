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
        //$FlowFixMe
        return state.filter((value, i) => i !== action.selectedCoffee);
    case EDIT_COFFEE:
        return state.map((value, i) => {
            if (i === action.selectedCoffee) {
                //$FlowFixMe
                return {...value, ...action.coffee};
            }
            return value;
        });
    default:
        return state;
    }
};
