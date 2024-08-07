import React, { useState } from 'react'
import inputTypes from '../../constants/inputTypes';
import SingleDimensionInput from './SingleDimensionInput';
import MultiDimensionInput from './MultiDimensionInput';
import Dropdown from './Dropdown';
import InputWithButtonList from './InputWithButtonList';
import MultiDropdownWithLabels from './MultiDropdownWithLabels';
import ColorPickerWithLabel from './ColorPickerWithLabel';
import TextInputWithLabel from './TextInputWithLabel';

const InputController = ({
    fieldDetails,
    formikFunctions
}) => {

    //  ..........................................//////////////////
    const [dimension, setDimension] = useState('px');
    const options = [
        { value: 'px', label: 'Inline' },
        { value: 'rem', label: 'Float' },
    ];

    const handleSelectChange = (selectedOption) => {
        setDimension(selectedOption.value);
    };

    const [selectedValue, setSelectedValue] = useState('');

    const handleButtonClick = (value) => {
        setSelectedValue(value);
        console.log('Selected value:', value);
    };

    const buttons = [
        { value: 'column', label: 'Column', icon: 'columnIcon' },
        { value: 'row', label: 'Row', icon: 'rowIcon' },
    ];

    switch (fieldDetails?.field_type) {
        case inputTypes.SINGLE_DIMENSION_INPUT:
            return <SingleDimensionInput fieldDetails={fieldDetails} formikFunctions={formikFunctions} />

        case inputTypes.DROPDOWN:
            return <Dropdown fieldDetails={fieldDetails} formikFunctions={formikFunctions} />

        case inputTypes.MULTI_DIMENSION_INPUT:
            return <MultiDimensionInput fieldDetails={fieldDetails} formikFunctions={formikFunctions} />

        case inputTypes.INPUT_WITH_BUTTON_LIST:
            return <InputWithButtonList fieldDetails={fieldDetails} formikFunctions={formikFunctions} />

        case inputTypes.MULTI_DROPDOWN_WITH_LABEL:
            return <MultiDropdownWithLabels fieldDetails={fieldDetails} formikFunctions={formikFunctions}  />

        case inputTypes.COLOR_PICKER_WITH_LABEL:
            return <ColorPickerWithLabel fieldDetails={fieldDetails} formikFunctions={formikFunctions} />

        case inputTypes.TEXT_INPUT_WITH_LABEL:
            return <TextInputWithLabel
            fieldDetails={fieldDetails} formikFunctions={formikFunctions} 
                label="Your Name"
                value={'inputValue'}
                onChange={() => { }}
                placeholder="Enter your name"
            />
        default:
            return <></>
    }
}

export default InputController