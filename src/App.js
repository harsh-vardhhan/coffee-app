//@flow
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators, type Dispatch} from 'redux';
import {connect} from 'react-redux';

//$FlowFixMe
import Split from 'grommet/components/Split';

//$FlowFixMe
import Box from 'grommet/components/Box';
import CoffeeList from './component/coffeeTable/coffeeList';
import Form from './component/form/form';
import AppHeader from './component/appHeader';
import {
  getCoffees,
  addCoffees,
  deleteCoffees,
  editCoffees
} from './actions/coffee';
import type {State} from './types/State';

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
      getCoffees: Function,
      addCoffees: Function,
      editCoffees: Function,
      deleteCoffees: Function
    }
};

class App extends Component<Props, AppState> {
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
        const name = this.state.name;
        const price = this.state.price;
        if (name && price) {
            this.props.actions.addCoffees({name, price});
        }
    }
    editCoffee = () => {
        const name = this.state.name;
        const price = this.state.price;
        if (name && price) {
            this.props.actions.editCoffees(
              {name, price},
              this.state.selectedCoffee
            );
        }
    }
    deleteCoffee = () => {
        this.props.actions.deleteCoffees(
          this.state.selectedCoffee
        );
        this.setState({
            name: '',
            price: 0,
            selectedCoffee: -1
        });
    }
    selectCoffee = (selectedCoffee: number) => {
        const price = this.props.coffee[selectedCoffee].price;
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
    coffee: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })),
    actions: PropTypes.shape({
        getCoffees: PropTypes.func.isRequired,
        addCoffees: PropTypes.func.isRequired,
        deleteCoffees: PropTypes.func.isRequired,
        editCoffees: PropTypes.func.isRequired
    })
};

const mapStateToProps = (state: State) => ({
    coffee: state.coffeeReducer
});

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
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
