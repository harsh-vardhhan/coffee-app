import {CoffeeTypes} from '../constants';

export function coffee(state = [], action) {
    switch (action.type) {
    case CoffeeTypes.GET_COFFEES:
        return action.coffee;
    case CoffeeTypes.ADD_COFFEE:
        return state.concat([action.coffee]);
    case CoffeeTypes.DELETE_COFFEE:
        return state.filter((value, i) => i !== action.coffee);
    default:
        return state;
    }
}