import { createContext } from 'react';
import { useState } from 'react';
import { BaseUrl } from './BaseUrl.jsx';


//Step 1: Create a context
export const AppContext = createContext();

//Step 2: Create a provider component
export default function AppContextProvide({children}){

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page , setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    async function fetchBlogsData(page = 1){
        setLoading(true);
        let url = `${BaseUrl}?page=${page}`;

        try{
            const result = await fetch(url)
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
            setLoading(false);

        }catch(error){
            console.log("Error fetching blogs data:", error);
            setPage(1);
            setPosts([]);
            setTotalPages(null);

        }

        setLoading(false);
    }

    function handlePageChange(page){
        setPage(page);
        fetchBlogsData(page);

    }

    const value={
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogsData,
        handlePageChange
    }

    return <AppContext.Provider value={value}>
    {children}
    </AppContext.Provider>
}