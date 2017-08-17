import {CoffeeTypes} from '../constants';

export function coffee(state = [], action) {
    switch (action.type) {
    case CoffeeTypes.GET_COFFEES:
        return action.coffee;
    default:
        return state;
    }
}