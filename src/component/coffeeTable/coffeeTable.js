//@flow
import React from 'react';
import PropTypes from 'prop-types';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import CoffeeTableHeader from './coffeeTableHeader';

type TypeCoffeTable = {
    coffee : Array<{
        name: string,
        price: number
    }>,
    selectCoffee: (number) => void
};

const CoffeeTable = ({coffee, selectCoffee}: TypeCoffeTable) => (
    <Table
        selectable={true}
        onSelect={selectCoffee}
    >
        <CoffeeTableHeader/>
        <tbody>
            {coffee.map((value, i) => {
                return (
                    <TableRow key={i}>
                        <td>{value.name}</td>
                        <td>{value.price}</td>
                    </TableRow>
                );
            })}
        </tbody>
    </Table>
);

const {array, func} = PropTypes;
CoffeeTable.propTypes = {
    coffee: array,
    selectCoffee: func
};

export default CoffeeTable;
