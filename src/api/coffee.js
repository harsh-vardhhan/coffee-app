//@flow
import axios from 'axios';
import type {Coffees} from '../types/Coffees';
import {coffeeMock} from '../mock/coffee.js';
const coffeeUrl = 'http://www.mocky.io/v2/59958469110000b300cc4216';

export const getCoffeesData = () => {
    const success = ({data}: {data: Coffees}) => data;
    const error = () => [];
    return axios.get(coffeeUrl).then(success).catch(error);
};

export const getCoffeesMock = () => coffeeMock;
