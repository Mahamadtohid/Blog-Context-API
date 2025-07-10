import { useNavigate , useNavigation , useLocation } from "react-router-dom";
// import useState from 'react';
import {AppContext} from '../components/AppContext'
import { BaseUrl } from "../components/BaseUrl";


function BlogPage(){
    const [blog , setBlog] = useState(null)
    const [relatedBlogs , setRelatedBlogs] = useState([]);
    const loaction = useLocation();
    const navigate = useNavigation();
    const [loading , setLoading] = useContext(AppContext)
    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs(){
        setLoading(true)

        let url = `${BaseUrl}?blogId=${blogId}`
        useEffetct()
    }

    return (

        
    
        <div>



        </div>
    
    );
}

export default BlogPage;