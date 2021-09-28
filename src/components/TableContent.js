import React from 'react';
import TableBody from "./TableBody"
function TableContent({table_date}) {

    const RenderTableHeader = () => Object?.keys(table_date[0])?.map((key,index)=><th key={index} scope="col">{key}</th>)

    return (
        <table className="table w-75 m-auto">
            <thead>
            <tr>
                {RenderTableHeader()}
            </tr>
            </thead>
            <tbody>
                <TableBody data={table_date}></TableBody>
            </tbody>
        </table>
    );
}

export default TableContent;