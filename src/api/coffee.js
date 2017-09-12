//@flow
import axios from 'axios';
import type {Coffees} from '../types/Coffees';

const coffeeUrl = 'http://www.mocky.io/v2/59958469110000b300cc4216';
const coffeeMock = [
    {
        id: 1,
        name: 'cappuccino',
        price: 3.45
    },
    {
        id: 2,
        name: 'lattee',
        price: 2.75
    },
    {
        id: 3,
        name: 'mocha',
        price: 4.25
    }
];

class coffeeApi {
    static getCoffees() {
        const success = ({data}: {data: Coffees}) => data;
        const error = () => [];
        axios.get(coffeeUrl).then(success).catch(error);
    }

    static getCoffeesMock = () => coffeeMock;
}

export default coffeeApi;
