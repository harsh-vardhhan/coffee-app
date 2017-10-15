//@flow
import type {Dispatch} from 'redux';
import type {Coffee} from '../types/Coffee';
import type {Coffees} from '../types/Coffees';

export type GET_COFFEES_TYPE = Dispatch<{
  type: string,
  coffees: Coffees
}>;

export type ADD_COFFEE_TYPE = Dispatch<{
  type: string,
  coffee: Coffee
}>;

export type DELETE_COFFEE_TYPE = Dispatch<{
  type: string,
  selectedCoffee: number
}>;

export type EDIT_COFFEE_TYPE = Dispatch<{
  type: string,
  coffee: Coffee,
  selectedCoffee: number
}>;
