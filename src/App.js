import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from 'grommet/components/Header';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import CoffeeTable from './component/coffeeTable/coffeeTable';
import {getCoffees} from './actions/coffee';

class App extends Component {

    componentDidMount() {
        this.props.actions.getCoffees();
    }

    render() {
        return (
            <div className='App'>
                <Header>
                    <h1>
                        {'Coffee Shop'}
                    </h1>
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
                        <CoffeeTable coffee={this.props.coffee}/>
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

App.propTypes = {
    coffee: PropTypes.array,
    actions: PropTypes.shape({
        getCoffees: PropTypes.func.isRequired
    })
};

const mapStateToProps = (state) => {
    return {
        coffee: state.coffee
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            getCoffees
        }, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
