import React, {type Component} from 'react';
import PropTypes from 'prop-types';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import CoffeeTableHeader from './coffeeTableHeader';

type TypeCoffeTable = {
    coffee : Array<{
        name: string,
        price: number
    }>
};

type TypeValue = {
    name: string,
    price: number
};

const CoffeeTable: Component<any> = ({coffee, selectCoffee}: TypeCoffeTable) => (
    <Table
        selectable={true}
        onSelect={selectCoffee}
    >
        <CoffeeTableHeader/>
        <tbody>
            {coffee.map((value: TypeValue, i: number) => {
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

CoffeeTable.propTypes = {
    coffee: PropTypes.array,
    selectCoffee: PropTypes.func
};

export default CoffeeTable;
