import React from 'react';
import PropTypes from 'prop-types';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';

const ActionButtons = ({addCoffee, deleteCoffee}) => (
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
        />
        <br/>
    </Box>
);

ActionButtons.propTypes = {
    addCoffee: PropTypes.func,
    deleteCoffee: PropTypes.func
};

export default ActionButtons;