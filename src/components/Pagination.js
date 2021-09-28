import React from 'react';

function Pagination({size,active_item,UpdateActiveItem}) {
    const RenderArray = Array(Math.floor(size)).fill().map((e, i) => i + 1)
    const RenderPaginationsItems = () => RenderArray.map(el =>
            <li
                key={el}
                onClick={( () => UpdateActiveItem(el))}
                className={"page-item " + (el === active_item  ? ' active ' : '')}>
                <p className="page-link">{el}</p>
            </li>)

    return (
        <nav aria-label=" Page navigation example">
            <ul className="pagination">
                {RenderPaginationsItems()}
            </ul>
        </nav>
    );
}

export default Pagination;