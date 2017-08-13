import React, {Component} from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import './App.css';
import CoffeeTable from './component/coffeeTable/coffeeTable';

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

export default App;
