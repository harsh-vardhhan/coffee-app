const coffeeUrl = 'http://www.mocky.io/v2/599566d7110000821072334d';

class coffeeApi {

    static getCoffees() {
        return fetch(coffeeUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) =>
            (response.json()).then((coffees) => coffees)
        );
    }
}

export default coffeeApi;