import BlogList from "./BlogList"
import UseFetch from "./UseFetch"
import {useState} from "react"


const Home = () => {

    const [updateFlag, setUpdateFlag] = useState(false)

    const {data, isLoading, error} = UseFetch('http://localhost:8000/posts', updateFlag)

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {data && <BlogList updateFlag = {updateFlag} setUpdateFlag = {setUpdateFlag}  posts = {data} />}
        </div>
    );
};

export default Home;