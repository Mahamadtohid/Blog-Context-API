import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination  from '../components/Pagination'

function Home(){

    return (
    
        <div className="">
            <Header/>

            <div className="flex items-center">
                <Blogs/>
                <Pagination/>
            </div>



        </div>
    
    );
}

export default Home;