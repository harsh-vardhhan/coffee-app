import React, {type Component} from 'react';
import PropTypes from 'prop-types';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';

const ActionButtons: Component<any> = ({addCoffee, deleteCoffee, editCoffee}) => (
    <Box
        justify='center'
        align='center'
        pad='medium'
        direction='row'
    >
        <Button
            label='Add'
            href='#'
            onClick={addCoffee}
        />
        <Button
            label='Delete'
            href='#'
            onClick={deleteCoffee}
        />
        <Button
            label='Save'
            href='#'
            onClick={editCoffee}
        />
        <br/>
    </Box>
);

ActionButtons.propTypes = {
    addCoffee: PropTypes.func,
    deleteCoffee: PropTypes.func,
    editCoffee: PropTypes.func
};

export default ActionButtons;
