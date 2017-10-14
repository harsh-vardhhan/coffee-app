//@flow
import type {Coffee} from '../types/Coffee';
import type {Coffees} from '../types/Coffees';

export type Action = {
    coffees: Coffees,
    coffee: Coffee,
    selectedCoffee: number,
    type: string
};
