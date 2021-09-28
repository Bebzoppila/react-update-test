import React,{useState} from 'react';
import CustomInput from "./ui/input/CostomInput";
import CustomTextAria from "./ui/textAria/CostomTextAria"
function Form({Send}) {
    let [form_values,set_form_values] = useState({theme:'',text:''})

    const UpdateDateInput = (text,key_name) => {
        let new_form_values = {...form_values}
        new_form_values[key_name] = text
        set_form_values(new_form_values)
    }

    const SubmitForm = (event) => {
        event.preventDefault()
        Send(form_values)
    }

    return (
        <form>
            <CustomInput
                UpdateDateInput={(text_input) => UpdateDateInput(text_input,'theme')}
                label_text={'Тема'} />
            <CustomTextAria
                label_text={'Текст'}
                UpdateDateTextarea={(text_input) => UpdateDateInput(text_input,'text')}/>
            <button onClick={SubmitForm} type="submit" className="btn btn-primary">Добавить элемент</button>
        </form>
    );
}

export default Form;