//@flow
import React from 'react';
import {array, func} from 'prop-types';
import Box from 'grommet/components/Box';
import ActionButton from '../actionButton/actionButton';
import CoffeeTable from '../coffeeTable/coffeeTable';

type TypeCoffeeList = {
    coffee: Array<{
        name: string,
        price: number
    }>,
    addCoffee: () => void,
    deleteCoffee: () => void,
    editCoffee: () => void,
    selectCoffee: (number) => void
};

const CoffeeList = ({coffee, addCoffee, deleteCoffee, editCoffee, selectCoffee}
  : TypeCoffeeList) => (
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
    coffee: array,
    addCoffee: func,
    deleteCoffee: func,
    editCoffee: func,
    selectCoffee: func
};

export default CoffeeList;
