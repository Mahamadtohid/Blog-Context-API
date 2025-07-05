import { useContext } from 'react';
import { AppContext } from './AppContext.jsx';

function Pagination(){

    const { page, totalPages, handlePageChange } = useContext(AppContext);

    return(
        <div className="pagination bg-slate-800 flex justify-between items-center p-4 text-white align-center">
            {
                page > 1 &&

            <button className="prev" onClick={() => handlePageChange(page-1)}>Previous</button>
            
            }
            
            {
                page < totalPages && 
                <button className="next" onClick={() => handlePageChange(page+1)}>Next</button>
            }

            <p>page {page} of {totalPages}</p>
            
        </div>
    )
}

export default Pagination;