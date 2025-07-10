import { useState , useEffect } from 'react'
import { useContext } from 'react'
import './App.css'
import { AppContext } from './components/AppContext'
import {Route , Routes } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import BlogPage from './Pages/BlogPage'
import TagPage from './Pages/TagPage'
import CategoryPage from './Pages/CategoryPage'
import Home from './Pages/Home'

function App() {

  const [searchParams , setSearchParams] = useSearchParams() //updation in url - gives toutput of two things 1) serch parameter objects
  //2) for changing setSearchParams

  const location = useLocation();
  
  const { fetchBlogsData } = useContext(AppContext);

  useEffect(()=>{
    const page = searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")){
      //Means we need to show this page
      const tag = location.pathname.split("/").at(-1).replace("-" , " ")
      fetchBlogsData(Number(page) , tag)
    }

    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replace("-" , " ");
      fetchBlogsData(Number(page) , category)
    }else{
      fetchBlogsData(Number(page))
    }
  },[location.pathname , location.search])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blogs/:blogId" element={<BlogPage/>} />
        <Route path="/blogs/:tag" element={<TagPage/>} />
        <Route path="/blogs/:category" element={<CategoryPage/>} />
      </Routes>
    </div>
  )
}

export default App
