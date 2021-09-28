import React,{useState,useMemo} from 'react';
import TableContent from "./TableContent";
import TableMenu from "./TableMenu"
const Table  = ({table_date,UpdateSortValues}) => {
    let [activ_filter,set_activ_filter] = useState({colum:'id',type_filter:'>',text_filter:''})
    let filter_name = [
        {text:'Идентификатор пользователя',value:'userId'},
        {text:'Идентификатор записи',value:'id'},
        {text:'Название',value:'title'},
        {text:'Текст',value:'body'},
    ]
    let value_function = [
        {text:'Больше',value:'>'},
        {text:'Меньше',value:'<'},
        {text:'Равно', value:'==='},
        {text:'Содержит', value:'includes'},
    ]
    const TableFilter = () =>{
        const filter_functions = {
            '>': (el1,el2) =>  String(el1) >  String(el2),
            '<': (el1,el2) =>  String(el1) <  String(el2),
            '===': (el1,el2) => String(el1) === String(el2),
            'includes': (el1,el2) => String(el1).includes(String(el2)),
        }
        return table_date.filter(elem => filter_functions[activ_filter.type_filter](elem[activ_filter.colum],activ_filter.text_filter))
    }
    const MemoizedTableFilter = useMemo(()=> TableFilter(),[activ_filter,table_date])

    const UpdateFilterValues = (key,value) => {
        let new_activ_filter = {...activ_filter}
        new_activ_filter[key] = value
        set_activ_filter(new_activ_filter)
    }

    return (
        <section className="table">
            <TableMenu
                UpdateSortValues={UpdateSortValues}
                UpdateFilterValues={UpdateFilterValues}
                value_function={value_function}
                filter_name={filter_name}
            />
            {MemoizedTableFilter.length > 0
                ? <TableContent table_date={MemoizedTableFilter}/>
                : <h2 className="h2 text-center">Записей нет</h2>}
        </section>
    );
};

export default Table;