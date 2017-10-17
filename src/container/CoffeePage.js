//@flow
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators, type Dispatch} from 'redux';
import {connect} from 'react-redux';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import CoffeeList from '../component/coffeeTable/coffeeList';
import Form from '../component/form/form';
import AppHeader from '../component/appHeader/appHeader';
import {
  getCoffees,
  addCoffees,
  deleteCoffees,
  editCoffees
} from '../actions/coffee';
import type {State} from '../types/State';
import type {
  Action,
  GET_COFFEES,
  ADD_COFFEE,
  DELETE_COFFEE,
  EDIT_COFFEE
} from '../types/Action';
import type {Coffee} from '../types/Coffee';

type AppState = {
    name: string,
    price: number,
    selectedCoffee: number
};

type Props = {
    coffee: Array<{
        name: string,
        price: number
    }>,
    actions: {
      getCoffees: () => GET_COFFEES,
      deleteCoffees: (number) => DELETE_COFFEE,
      editCoffees: (Coffee, number) => EDIT_COFFEE,
      addCoffees: (Coffee) => ADD_COFFEE,
    }
};

class CoffeePage extends Component<Props, AppState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            name: '',
            price: 0,
            selectedCoffee: -1
        };
    }

    componentDidMount() {
        this.props.actions.getCoffees();
    }

    setName = (name: string) => this.setState({name})

    setPrice = (newPrice: string) => {
        if (newPrice) {
            const price = parseFloat(newPrice);
            this.setState({price});
        }
    }

    addCoffee = () => {
        const {name, price} = this.state;
        if (name && price) {
            this.props.actions.addCoffees({name, price});
        }
    }

    editCoffee = () => {
        const {name, price, selectedCoffee} = this.state;
        if (name && price) {
            this.props.actions.editCoffees({name, price}, selectedCoffee);
        }
    }

    deleteCoffee = () => {
        const {selectedCoffee} = this.state;
        this.props.actions.deleteCoffees(selectedCoffee);
        this.setState({
            name: '',
            price: 0,
            selectedCoffee: -1
        });
    }

    selectCoffee = (selectedCoffee: number) => {
        const {coffee} = this.props;
        const price = coffee[selectedCoffee].price;
        const name = coffee[selectedCoffee].name;
        this.setState({selectedCoffee, name, price});
    }

    render() {
        const {coffee} = this.props;
        const {name, price} = this.state;
        const {
            deleteCoffee,
            addCoffee,
            editCoffee,
            selectCoffee,
            setName,
            setPrice
        } = this;
        return (
            <div className='App'>
                <AppHeader/>
                <Split
                    fixed={false}
                    flex='right'
                >
                    <CoffeeList
                        coffee={coffee}
                        deleteCoffee={deleteCoffee}
                        addCoffee={addCoffee}
                        editCoffee={editCoffee}
                        selectCoffee={selectCoffee}
                    />
                    <Form
                        name={name}
                        price={price}
                        setName={setName}
                        setPrice={setPrice}
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

const {shape, number, string, arrayOf, func} = PropTypes;
CoffeePage.propTypes = {
    coffee: arrayOf(shape({
        id: number,
        name: string.isRequired,
        price: number.isRequired
    })),
    actions: shape({
        getCoffees: func.isRequired,
        addCoffees: func.isRequired,
        deleteCoffees: func.isRequired,
        editCoffees: func.isRequired
    })
};

const mapStateToProps = (state: State) => ({
    coffee: state.coffeeReducer
});

const mapDispatchToProps = (dispatch: Dispatch<State, Action>) => ({
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
)(CoffeePage);
