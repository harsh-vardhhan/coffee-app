const coffeeUrl: string = 'http://www.mocky.io/v2/59958469110000b300cc4216';

type Coffee = Array<{
    name: string,
    price: string
}>

class coffeeApi {

    static getCoffees() {
        return fetch(coffeeUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) =>
            (response.json()).then((coffees: Coffee) => coffees)
        );
    }
}

export default coffeeApi;