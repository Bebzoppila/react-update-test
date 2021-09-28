import React from 'react';

function CustomSelect({ options_array=[{text:'1',value:"1"},{text:'2',value:"2"}],
                        default_options='Выберите опцию',onSelected}, ) {

    const RenderSelect = () =>
        options_array.map((elem)=> <option value={elem.value} key={elem.value}>{elem.text}</option>)

    return (
        <select onInput={onSelected} className="form-select" aria-label="Default select example">
            <option hidden defaultValue>{default_options}</option>
            {RenderSelect()}
        </select>
    );
}

export default CustomSelect;