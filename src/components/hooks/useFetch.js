import {useEffect} from 'react';

function useFetch (url,function_set,method="GET",body = '') {
    async function FetchGet(){
        const response = await fetch(url,{
            method:method,
            headers:{
                'Content-Type': 'application/json;charset=utf-8',
            },
        })
        let data = await response.json()
        return data
    }
    useEffect(  ()=>{
        FetchGet().then(data => function_set(data))
    },[])
}
export  default  useFetch