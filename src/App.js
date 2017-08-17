import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from 'grommet/components/Header';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import CoffeeTable from './component/coffeeTable/coffeeTable';
import {getCoffees} from './actions/coffee';

class App extends Component {

    componentDidMount() {
        this.props.actions.getCoffees();
    }

    render() {
        return (
            <div className='App'>
                <AppHeader/>
                <Split
                    fixed={false}
                    flex='right'
                >
                    <Box
                        justify='center'
                        align='center'
                        pad='medium'
                    >
                        <ActionButtons/>
                        <CoffeeTable coffee={this.props.coffee}/>
                    </Box>
                    <Form/>
                </Split>
            </div>
        );
    }
}

const Form = () => (
    <Box
        justify='center'
        align='center'
        pad='medium'
    >
        <h3>{'Form'}</h3>
    </Box>
);

const AppHeader = () => (
    <Header>
        <h1>{'Coffee Shop'}</h1>
    </Header>
);

const ActionButtons = () => (
    <Box
        justify='center'
        align='center'
        pad='medium'
        direction='row'
    >
        <Button
            label='Add'
            href='#'
        />
        <Button
            label='Delete'
            href='#'
        />
        <br/>
    </Box>
);

App.propTypes = {
    coffee: PropTypes.array,
    actions: PropTypes.shape({
        getCoffees: PropTypes.func.isRequired
    })
};

const mapStateToProps = (state) => ({
    coffee: state.coffee
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        getCoffees
    }, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
