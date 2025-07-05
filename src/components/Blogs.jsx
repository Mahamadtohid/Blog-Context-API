import {useContext} from 'react';
import {AppContext} from './AppContext.jsx';
import Spinner from './Spinner.jsx';


function Blogs(){

    const {posts , loading} = useContext(AppContext);

    return(
        <div className="w-11/12 max-w-[500px] py-2 flex flex-col gap-y-5">

            {
                loading ? (<Spinner/>) : (
                    posts.length === 0 ? 
                    (<div>
                        <p>No Post Found</p>
                    </div>) : 
                    (posts.map((post) => (
                        <div key={post.id}>
                            <p className='font-bold text-small'>{post.title}</p>
                            <p className="text-[10px] ">
                                By<span className="italic underline">{post.author} on <span className="font-bold underline">{post.category}</span></span>
                            </p>
                            <p>Posted On <span>{post.date}</span></p>

                            <p>{post.content}</p>

                            <div>
                                {post.tags.map((tag , index) => {
                                    return <span key={index}>{`#${tag}`}</span>
                            })}
                            </div>
                        </div>
                    )))
                )
            }
            
        </div>
    )
}

export default Blogs;