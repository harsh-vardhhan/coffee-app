//@flow
export type Action = {
    coffees: Array<{
        coffee: {
            id: number,
            name: string,
            price: string
        }
    }>,
    coffee: {
        name: string,
        price: string,
        selectedCoffee: number
    },
    type: string
};
