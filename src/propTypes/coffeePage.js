//@flow
import {func, arrayOf, shape, number, string} from 'prop-types';

export const CoffeePageType = shape({
    coffee: arrayOf(shape({
        id: number,
        name: string.isRequired,
        price: number.isRequired
    })),
    actions: shape({
        getCoffees: func.isRequired,
        addCoffees: func.isRequired,
        deleteCoffees: func.isRequired,
        editCoffees: func.isRequired
    })
});