import React from 'react';

import '../css/form-input.scss';

const FormInput = ({ onFormFieldChange, label, ...otherFormProps}) => {
    return (
        <div className='group'>
            <input className='form-input' onChange={onFormFieldChange} />
            {
                label ?
                (<label className={`${otherFormProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>)
                : null
            }
        </div>
    )
}

export default FormInput;