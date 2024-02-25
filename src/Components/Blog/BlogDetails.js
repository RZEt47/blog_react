import {useParams} from "react-router-dom"
import UseFetch from "../Home/UseFetch"
import {useNavigate} from "react-router-dom"
import deletePost from "../Delete/DeletePost"
const BlogDetails = () => {

    const {id} = useParams()

    const {data: blog, isLoading, error} = UseFetch('http://localhost:8000/posts/' + id)

    const navigate = useNavigate()

    const afterDelete = () => {
        navigate('/')
    }

    return (
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}

            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p className="author">Written by {blog.author}</p>
                    <div className="blog-body">{blog.body}</div>
                    <button className="btn-delete" onClick={() => {deletePost(blog.id, afterDelete)}}>Delete</button>
                </article>
            )}
        </div>
    );
};

export default BlogDetails;