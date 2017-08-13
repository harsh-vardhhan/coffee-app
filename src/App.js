import React, {Component} from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Header>
                    <Title>
                        {'Coffee Shop'}
                    </Title>
                </Header>
                <Split
                    fixed={false}
                    flex='right'
                >
                    <Box
                        justify='center'
                        align='center'
                        pad='medium'
                    />
                    <Box
                        justify='center'
                        align='center'
                        pad='medium'
                    >
                        <CoffeeTable/>
                    </Box>
                    <Box
                        justify='center'
                        align='center'
                        pad='medium'
                    />
                </Split>
            </div>
        );
    }
}

const CoffeeTable = () => {
    return (
        <Table selectable={true}>
            <TableHeader/>
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
};

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>
                    {'Id'}
                </th>
                <th>
                    {'Name'}
                </th>
                <th>
                    {'Price($)'}
                </th>
            </tr>
        </thead>
    );
};

export default App;
