//@flow
// $FlowFixMe
import axios from 'axios';
import type {Coffees} from '../types/Coffees';

const coffeeUrl = 'http://www.mocky.io/v2/59958469110000b300cc4216';
const onSuccess = ({data}: {data: Coffees}) => data;
const onError = () => [];

class coffeeApi {
    static getCoffees() {
        return axios.get(coffeeUrl).then(onSuccess).catch(onError);
    }
}

export default coffeeApi;
