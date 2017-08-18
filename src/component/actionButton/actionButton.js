import React from 'react';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';

const ActionButtons = ({addCoffee}) => (
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
        />
        <br/>
    </Box>
);

export default ActionButtons;