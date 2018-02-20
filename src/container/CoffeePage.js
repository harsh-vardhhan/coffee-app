//@flow
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
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
import type {Dispatch} from '../types/Store';
import type {AppState, Props} from '../types/CoffeePage';
import {CoffeePageType} from '../propTypes/coffeePage';

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

    setName = (name) => this.setState({name})

    setPrice = (newPrice) => {
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

    selectCoffee = (selectedCoffee) => {
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

CoffeePage.propTypes = CoffeePageType.isRequired;

const mapStateToProps = (state: State) => ({
    coffee: state.coffeeReducer
});

const mapDispatchToProps = (dispatch: Dispatch) => ({

    //$FlowFixMe
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
