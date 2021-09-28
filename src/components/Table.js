import React,{useState,useMemo,useEffect} from 'react';
import TableContent from "./TableContent";
import TableMenu from "./TableMenu"
import Pagination from "./Pagination";
const Table  = ({table_date,UpdateSortValues}) => {
    let [activ_filter,set_activ_filter] = useState({colum:'id',type_filter:'>',text_filter:''})
    let [pagination_active, set_pagination_active] = useState(1)
    let[base_pagination_size, set_base_pagination_size] = useState(Math.ceil(table_date.length/4))
    useEffect(()=>{
        set_base_pagination_size(Math.ceil(table_date.length/4))
    },[table_date])

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


    const UpdateActiveItem = (value) => set_pagination_active(value)
    const TableFilter = () =>{
        const filter_functions = {
            '>': (el1,el2) =>  (el1) >  (el2),
            '<': (el1,el2) =>  (el1) <  (el2),
            '===': (el1,el2) => String(el1) === String(el2),
            'includes': (el1,el2) => String(el1).includes(String(el2)),
        }
        return table_date.filter(elem => filter_functions[activ_filter.type_filter](elem[activ_filter.colum],activ_filter.text_filter))
    }

    const MemoizedTableFilter = useMemo(()=> TableFilter(),[activ_filter,table_date])
    const PaginationSize = useMemo(()=> MemoizedTableFilter
        .slice(base_pagination_size * (pagination_active - 1) , pagination_active * base_pagination_size),[pagination_active,table_date,base_pagination_size])
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
            <div className="d-flex justify-content-center">
                <Pagination
                    UpdateActiveItem={UpdateActiveItem}
                    size={table_date.length/base_pagination_size}
                    active_item={pagination_active}
                />
            </div>

            {MemoizedTableFilter.length > 0
                ? <TableContent
                    table_date={PaginationSize}/>
                : <h2 className="h2 text-center">Записей нет</h2>}
        </section>
    );
};

export default Table;