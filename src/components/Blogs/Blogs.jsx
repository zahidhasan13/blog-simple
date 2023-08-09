/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = (props) => {
    const addToBookmark = props.addToBookmark;
    const addReadTime = props.addReadTime;

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="m-4">
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} addToBookmark={addToBookmark} addReadTime={addReadTime}></Blog>)
            }
        </div>
    );
};

export default Blogs;