import React from 'react';
import PropTypes from 'prop-types';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import CoffeeTableHeader from './coffeeTableHeader';

const CoffeeTable = ({coffee}) => (
    <Table selectable={true}>
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

CoffeeTable.propTypes = {
    coffee: PropTypes.array
};

export default CoffeeTable;