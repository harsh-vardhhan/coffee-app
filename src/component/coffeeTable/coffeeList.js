import React from 'react';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';
import ActionButton from '../actionButton/actionButton';
import CoffeeTable from '../coffeeTable/coffeeTable';

const CoffeeList = ({coffee, addCoffee}) => (
    <Box
        justify='center'
        align='center'
        pad='medium'
    >
        <ActionButton addCoffee={addCoffee}/>
        <CoffeeTable coffee={coffee}/>
    </Box>
);

CoffeeList.propTypes = {
    coffee: PropTypes.array,
    addCoffee: PropTypes.func
};

export default CoffeeList;