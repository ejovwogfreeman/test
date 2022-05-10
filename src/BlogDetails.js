import { useHistory, useParams } from "react-router-dom"
import useFetch from './useFetch';

const BlogDetails = () => {

    const { id } = useParams();

    const {data:blogs, isPending} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

        const handleDelete = () => {
            fetch('http://localhost:8000/blogs/' + blogs.id, {
                method: 'DELETE'
            }).then(() => {
                history.push("/")
            })
        }

    return ( 
        <div className="blog-details">
            {isPending && <div className="loading">Loading...</div>}
            {blogs && (
                <article>
                    <h2>{ blogs.title }</h2>
                    <p>written by { blogs.author }</p>
                    <div>{ blogs.body }</div>
                    <button onClick={ handleDelete }>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;