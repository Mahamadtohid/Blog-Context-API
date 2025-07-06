import {useContext} from 'react';
import {AppContext} from './AppContext.jsx';
import Spinner from './Spinner.jsx';


function Blogs(){

    const {posts , loading} = useContext(AppContext);

    return(
        <div className="w-11/12 max-w-[650px] py-8 flex flex-col gap-y-7 mt-[66px] mb-8">

            {
                loading ? (<Spinner/>) : (
                    posts.length === 0 ? 
                    (<div>
                        <p>No Post Found</p>
                    </div>) : 
                    (posts.map((post) => (
                        <div key={post.id}>
                            <p className='font-bold text-lg'>{post.title}</p>
                            <p className="text-sm ">
                                By<span className="italic underline">{post.author} on <span className="font-bold underline">{post.category}</span></span>
                            </p>
                            <p>Posted On <span>{post.date}</span></p>

                            <p className="text-md mt-[14px]">{post.content}</p>

                            <div className="flex gap-x-3">
                                {post.tags.map((tag , index) => {
                                    return <span key={index} className="to-blue-700 underline font-bold text-xs mt-[5px]">{`#${tag}`}</span>
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