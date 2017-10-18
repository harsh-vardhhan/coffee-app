//@flow
import type {Coffee} from '../types/Coffee';
import type {Coffees} from '../types/Coffees';

export type GET_COFFEES_ACTION = {|
  type: 'GET_COFFEES',
  coffees: Coffees
|}

export type ADD_COFFEE_ACTION = {|
  type: 'ADD_COFFEE',
  coffee: Coffee
|}

export type DELETE_COFFEE_ACTION = {|
  type: 'DELETE_COFFEE',
  selectedCoffee: number
|}

export type EDIT_COFFEE_ACTION = {|
  type: 'EDIT_COFFEE',
  selectedCoffee: number,
  coffee: Coffee
|}

export type Action =
  | GET_COFFEES_ACTION
  | ADD_COFFEE_ACTION
  | DELETE_COFFEE_ACTION
  | EDIT_COFFEE_ACTION
