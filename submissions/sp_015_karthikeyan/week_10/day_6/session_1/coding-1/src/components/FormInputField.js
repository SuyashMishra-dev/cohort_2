import React from 'react';

const FormInputField = (props) => {
    return (
        <div className='form-group'>
            <label>{props.data.label}</label>
            <input className='form-control' type={props.data.type} name={props.data.name} value={props.data.value} onChange={(e) => props.func(e)} required />
        </div>
    )
}

export default FormInputField;