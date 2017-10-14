import type {Dispatch} from 'redux';
import type {Coffee} from '../types/Coffee';
import type {Coffees} from '../types/Coffees';

export type DispatchGetCoffees = Dispatch<{type: string, coffees: Coffees}>;
export type DispatchAddCoffees = Dispatch<{type: string, coffee: Coffee}>;
export type DispatchDeleteCoffees = Dispatch<{type: string, selectedCoffee: number}>;
export type DispatchEditCoffees = Dispatch<{type: string, coffee: Coffee, selectedCoffee: number}>;
