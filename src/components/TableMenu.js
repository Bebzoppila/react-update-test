import React from 'react';
import CustomSelect from "./ui/select/CustomSelect";
import CustomInput from "./ui/input/CostomInput";
function TableMenu({filter_name,value_function,UpdateFilterValues,UpdateSortValues}) {
    return (
        <div className="TableMenu">
            <div className="container">
                <div className="TableMenu__content d-flex align-items-center justify-content-center flex-column">
                    <h2 className="h2">Фильтрация</h2>
                    <div className="d-flex w-50 align-items-center">
                        <p className="p-2 w-50">Поле для фильтрации</p>
                        <CustomSelect
                            options_array={filter_name}
                            onSelected={event=> UpdateFilterValues('colum',event.target.value)}
                        />
                    </div>
                    <div className="d-flex w-50 align-items-center">
                        <p className="p-2 w-50">Знак фильтрации</p>
                        <CustomSelect
                            options_array={value_function}
                            onSelected={event => UpdateFilterValues('type_filter',event.target.value)}
                        />
                    </div>
                    <div className="d-flex w-50 align-items-center">
                        <p className="p-2 w-50">Текст</p>
                        <CustomInput
                            UpdateDateInput={value => UpdateFilterValues('text_filter', value)}
                        />
                    </div>
                </div>
                <div className="TableMenu__content d-flex align-items-center justify-content-center flex-column">
                    <h2 className="h2">Сортировка</h2>
                    <div className="d-flex w-50 align-items-center">
                        <p className="p-2 w-50">Поле для сортировки</p>
                        <CustomSelect
                            options_array={filter_name}
                            onSelected={event => UpdateSortValues(event.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TableMenu;