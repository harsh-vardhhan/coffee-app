//@flow
import React from 'react';
import {func} from 'prop-types';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';

type TypeActionButton = {
    addCoffee: () => void,
    deleteCoffee: () => void,
    editCoffee: () => void
};

const ActionButtons = ({addCoffee, deleteCoffee, editCoffee}: TypeActionButton) => (
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
    addCoffee: func,
    deleteCoffee: func,
    editCoffee: func
};

export default ActionButtons;
