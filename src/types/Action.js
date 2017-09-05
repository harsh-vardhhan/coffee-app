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
        price: number,
        selectedCoffee: number
    },
    selectedCoffee: number,
    type: string
};
