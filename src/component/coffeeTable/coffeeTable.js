import React from 'react';
import CoffeeTableHeader from './coffeeTableHeader';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';

const CoffeeTable = () => (
    <Table selectable={true}>
        <CoffeeTableHeader/>
        <tbody>
            <TableRow>
                <td>
                    {'1'}
                </td>
                <td>
                    {'Cappuccino'}
                </td>
                <td className='secondary'>
                    {'3'}
                </td>
            </TableRow>
        </tbody>
    </Table>
);

export default CoffeeTable;