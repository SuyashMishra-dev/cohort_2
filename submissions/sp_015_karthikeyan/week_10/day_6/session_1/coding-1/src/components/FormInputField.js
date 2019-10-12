import React from 'react';

const FormInputField = (props) => {
    return (
        <div className='form-group'>
            <label>{props.data.label}</label>
            <input type='text' className='form-control' name={props.data.name} value={props.data.value} onChange={(e) => props.func(e)} />
        </div>
    )
}

export default FormInputField;