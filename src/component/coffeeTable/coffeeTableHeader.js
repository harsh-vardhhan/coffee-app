import React, {type Component} from 'react';
const CoffeeTableHeader: Component<any> = () => (
    <thead>
        <tr>
            <th>{'Name'}</th>
            <th>{'Price($)'}</th>
        </tr>
    </thead>
);

export default CoffeeTableHeader;