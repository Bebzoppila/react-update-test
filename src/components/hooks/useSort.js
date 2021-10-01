import {useMemo} from 'react'

function useSort(array_of_date,column_sort) {
    return useMemo(()=>[...array_of_date].sort((el1,el2) =>
        parseInt(el1[column_sort])
            ? el1[column_sort] - el2[column_sort]
            :  String(el1[column_sort]).localeCompare(String(el2[column_sort])) ),[array_of_date,column_sort])
}

export  default useSort