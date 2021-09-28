import React from 'react';
import useInput from '../../hooks/useInput'
function CustomInput({label_text='',UpdateDateInput,type="text",function_validate= null}) {
    let input_id = Math.random() + Math.random() * 121
    let Handler =  useInput(UpdateDateInput,function_validate)

    return (
        <div className="mb-2">
            <label htmlFor={input_id} className="form-label">{label_text}</label>
            <input onChange={Handler} type={type} className="form-control" id={input_id} aria-describedby="text" />
        </div>
    );
}

export default CustomInput;