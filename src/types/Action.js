//@flow
import type {Coffee} from '../types/Coffee';
import type {Coffees} from '../types/Coffees';

export type GET_COFFEES = {|
  type: 'GET_COFFEES',
  coffees: Coffees
|}

export type ADD_COFFEE = {|
  type: 'ADD_COFFEE',
  coffee: Coffee
|}

export type DELETE_COFFEE = {|
  type: 'DELETE_COFFEE',
  selectedCoffee: number
|}

export type EDIT_COFFEE = {|
  type: 'EDIT_COFFEE',
  selectedCoffee: number,
  coffee: Coffee
|}

export type Action =
  | GET_COFFEES
  | ADD_COFFEE
  | DELETE_COFFEE
  | EDIT_COFFEE
