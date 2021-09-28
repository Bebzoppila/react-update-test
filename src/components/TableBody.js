import React from 'react';

function TableBody({data}) {


    const RenderTableBody = () => data.map(row_data => <tr key={row_data.id}>{Object.values(row_data).map((row_item,index) => <td key={index}>{row_item}</td>)}</tr>)
    return (
        RenderTableBody()
    );
}

export default TableBody;