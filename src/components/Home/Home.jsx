import { useState } from "react";
import Blogs from "../Blogs/Blogs";
import Bookmark from "../Bookmark/Bookmark";
import ReadTime from "../ReadTime/ReadTime";

const Home = () => {
    const [bookmark, setBookmark] = useState([]);
    const [readTime, setReadTime] = useState([]);

    
    const addToBookmark = (bookmarked) => {
        let newBookmark = [];
        const exist = bookmark.find(bm => bm.id === bookmarked.id);
        if(!exist){
            newBookmark = [...bookmark, bookmarked];
        }else{
            newBookmark = [...bookmark];
        }
        setBookmark(newBookmark);
    }
    const addReadTime = (readCount) => {
        const newReadTime = [...readTime, readCount];
        setReadTime(newReadTime);
    }
    return (
        <div className="lg:flex">
            <div className="lg:basis-[70%]">
            <Blogs addToBookmark={addToBookmark} addReadTime={addReadTime}></Blogs>
            </div>
            <div className="lg:basis-[30%]">
                <ReadTime readTime={readTime}></ReadTime>
                <Bookmark bookmark={bookmark}></Bookmark>
            </div>
        </div>
    );
};

export default Home;