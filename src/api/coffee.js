const coffeeUrl: string = 'http://www.mocky.io/v2/59958469110000b300cc4216';
import type {Coffees} from '../types/Coffees';

class coffeeApi {

    static getCoffees() {
        return fetch(coffeeUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) =>
            (response.json()).then((coffees: Coffees) => coffees)
        );
    }
}

export default coffeeApi;