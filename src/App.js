import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from 'grommet/components/Header';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import CoffeeTable from './component/coffeeTable/coffeeTable';
import Form from './component/form/form';
import ActionButton from './component/actionButton/actionButton';
import {getCoffees, addCoffees} from './actions/coffee';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '1'
        };
    }

    componentDidMount() {
        this.props.actions.getCoffees();
    }

    setName = (name) => this.setState({name});
    setPrice = (price) => this.setState({price});
    addCoffee = () => this.props.actions.addCoffees(this.state);

    render() {
        return (
            <div className='App'>
                <AppHeader/>
                <Split
                    fixed={false}
                    flex='right'
                >
                    <CoffeeList
                        coffee={this.props.coffee}
                        addCoffee={this.addCoffee}
                    />
                    <Form
                        name={this.state.name}
                        price={this.state.price}
                        setName={this.setName}
                        setPrice={this.setPrice}
                    />
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

const AppHeader = () => (
    <Header>
        <h1>{'Coffee Shop'}</h1>
    </Header>
);

App.propTypes = {
    coffee: PropTypes.array,
    actions: PropTypes.shape({
        getCoffees: PropTypes.func.isRequired,
        addCoffees: PropTypes.func.isRequired
    })
};

const mapStateToProps = (state) => ({
    coffee: state.coffee
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        getCoffees,
        addCoffees
    }, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
