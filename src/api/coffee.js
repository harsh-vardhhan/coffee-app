//@flow
import type {Coffees} from '../types/Coffees';

const coffeeUrl = 'http://www.mocky.io/v2/59958469110000b300cc4216';
const onSuccess = (response) => (response.json()).then((coffees: Coffees) => coffees);
const onError = () => [];

class coffeeApi {
    static getCoffees() {
        return fetch(coffeeUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(onSuccess, onError);
    }
}

export default coffeeApi;
