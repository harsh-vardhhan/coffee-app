import React from 'react';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';
import TextInput from 'grommet/components/TextInput';
import FormField from 'grommet/components/FormField';
import NumberInput from 'grommet/components/NumberInput';

type TypeForm = {
    name: string,
    price: number
};

type TypeName = {
    target: {
        value: string
    }
};

type TypePrice = {
    target: {
        value: string
    }
};

const Form: React.Component<any> = ({name, price, setName, setPrice}: TypeForm) => (
    <Box
        justify='center'
        align='center'
        pad='medium'
    >
        <h3>{'Form'}</h3>
        <FormField>
            <TextInput
                value={name}
                placeHolder='Name'
                onDOMChange={(_name: TypeName) => setName(_name.target.value)}
            />
        </FormField>
        <FormField>
            <NumberInput
                value={price}
                type='number'
                onChange={(_price: TypePrice) => setPrice(_price.target.value)}
            />
        </FormField>
    </Box>
);

Form.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    setName: PropTypes.func,
    setPrice: PropTypes.func
};

export default Form;
