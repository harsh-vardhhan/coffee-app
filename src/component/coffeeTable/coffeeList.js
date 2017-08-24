import React, {type Component} from 'react';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';
import ActionButton from '../actionButton/actionButton';
import CoffeeTable from '../coffeeTable/coffeeTable';

type TypeCoffeeList = {
    coffee: Array<{
        name: string,
        price: number
    }>
};

const CoffeeList: Component<any> = ({
    coffee,
    addCoffee,
    deleteCoffee,
    editCoffee,
    selectCoffee
}: TypeCoffeeList) => (
    <Box
        justify='center'
        align='center'
        pad='medium'
    >
        <ActionButton
            addCoffee={addCoffee}
            deleteCoffee={deleteCoffee}
            editCoffee={editCoffee}
        />
        <CoffeeTable
            coffee={coffee}
            selectCoffee={selectCoffee}
        />
    </Box>
);

CoffeeList.propTypes = {
    coffee: PropTypes.array,
    addCoffee: PropTypes.func,
    deleteCoffee: PropTypes.func,
    editCoffee: PropTypes.func,
    selectCoffee: PropTypes.func
};

export default CoffeeList;
