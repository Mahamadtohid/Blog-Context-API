import { useState , useEffect } from 'react'
import { useContext } from 'react'
import './App.css'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import { AppContext } from './components/AppContext'

function App() {
  const [count, setCount] = useState(0)
  const { fetchBlogsData } = useContext(AppContext);

  useEffect(()=>{
    fetchBlogsData();
  },[])

  return (
    <div className="App gap-y-1 justify-center align-center flex flex-col h-full w-full items-center">
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default App
