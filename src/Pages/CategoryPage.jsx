import {useNavigate} from 'react-router-dom'
import Header from '../components/Header'
import {useLocation} from 'react-router-dom'
import Blogs from '../components/Blogs'
import Pagination  from '../components/Pagination'


function CategoryPage(){
    const navigation = useNavigate();
    const location = useLocation();

    const category = location.pathname.split("/").at(-1);

    return (
    
        <div>
            <Header/>
            <div>
                <button
                onClick={()=> navigation(-1)}
                >
                    Back

                </button>
                <h2>
                    Blogs Tagged <span>{category}</span>
                </h2>
            </div>
            <Blogs/>
            <Pagination/>

        </div>
    
    );
}

export default CategoryPage;