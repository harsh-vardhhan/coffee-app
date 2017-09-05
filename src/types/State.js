//@flow
export type CoffeeReducer = Array<{
    id: number,
    name: string,
    price: number
}>

export type State = {
  coffeeReducer: CoffeeReducer
};
