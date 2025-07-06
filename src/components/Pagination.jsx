import { useContext } from 'react';
import { AppContext } from './AppContext.jsx';

function Pagination(){

    const { page, totalPages, handlePageChange } = useContext(AppContext);

    return(
        <div className="pagination flex justify-center items-center border-[2px] w-full fixed bottom-0 bg-white">
            <div className="w-11/12 max-w-[650px] flex py-2 justify-between">


                <div className="flex gap-x-3">


                {
                    page > 1 &&

                    <button className="prev rounded-md px-1 border-[3px]  bg-gray-200" onClick={() => handlePageChange(page-1)}>Previous</button>
                    
                }
                    
                {
                        page < totalPages && 
                        <button className="next rounded-md px-2 border-[3px] bg-gray-200" onClick={() => handlePageChange(page+1)}>Next</button>
                }
                </div>
           

            <p className="font-bold text-sm">page {page} of {totalPages}</p>


            </div>
            
            
        </div>
    )
}

export default Pagination;