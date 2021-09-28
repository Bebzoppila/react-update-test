
function useInput(function_update,function_validate) {

    const DefaultValidate = (text) => text.trim().length > 0

    return function (event) {
        let input_value = event.target.value.trim()
        let result_validate = function_validate ? function_validate(input_value): DefaultValidate(input_value)
        if(result_validate)  function_update(input_value)
    }

}
export default  useInput