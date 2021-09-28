import React from 'react';
import useInput from '../../hooks/useInput'
function CustomTextAria({label_text,UpdateDateTextarea,type="text",function_validate= null}) {
    let textarea_id = Math.random() + Math.random() * 121
    let Handler =  useInput(UpdateDateTextarea,function_validate)

    return (
        <div className="mb-3">
            <label htmlFor={textarea_id} className="form-label">{label_text}</label>
            <textarea onChange={Handler} className="form-control" placeholder="" id={textarea_id} />
        </div>
    );
}

export default CustomTextAria;