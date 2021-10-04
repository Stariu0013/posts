import React from 'react';
import {getPages} from "../../../utils/pages";

function Pagination({page, changePage, totalPages}) {
    const pagesArray = getPages(totalPages);

    return <div className="page__wrapper">
        {pagesArray.map(p => {
            return <span
                key={p}
                className={page === p ? 'page page__current' : 'page'}
                onClick={() => changePage(p)}
            >
                    {p}
                </span>
        })}
    </div>
}

export default Pagination;