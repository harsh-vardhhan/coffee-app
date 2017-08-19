import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import CoffeeList from './component/coffeeTable/coffeeList';
import Form from './component/form/form';
import AppHeader from './component/appHeader';
import {getCoffees, addCoffees, deleteCoffees, editCoffees} from './actions/coffee';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
            selectedCoffee: -1
        };
    }

    componentDidMount() {
        this.props.actions.getCoffees();
    }

    setName = (name) => this.setState({name});
    setPrice = (price) => this.setState({price});
    addCoffee = () => this.props.actions.addCoffees(this.state);
    editCoffee = () => this.props.actions.editCoffees(this.state);
    deleteCoffee = () => {
        this.props.actions.deleteCoffees(this.state.selectedCoffee);
        this.setState({
            name: '',
            price: '',
            selectedCoffee: -1
        });
    };
    selectCoffee = (selectedCoffee) => {
        const price = (this.props.coffee[selectedCoffee].price).toString();
        const name = this.props.coffee[selectedCoffee].name;
        this.setState({selectedCoffee, name, price});
    }

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
                        deleteCoffee={this.deleteCoffee}
                        addCoffee={this.addCoffee}
                        editCoffee={this.editCoffee}
                        selectCoffee={this.selectCoffee}
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

App.propTypes = {
    coffee: PropTypes.array,
    actions: PropTypes.shape({
        getCoffees: PropTypes.func.isRequired,
        addCoffees: PropTypes.func.isRequired,
        deleteCoffees: PropTypes.func.isRequired,
        editCoffees: PropTypes.func.isRequired
    })
};

const mapStateToProps = (state) => ({
    coffee: state.coffee
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        getCoffees,
        addCoffees,
        deleteCoffees,
        editCoffees
    }, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
