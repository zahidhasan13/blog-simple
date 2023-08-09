import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blogs from "../Blogs/Blogs";
import Bookmark from "../Bookmark/Bookmark";
import ReadTime from "../ReadTime/ReadTime";

const Home = () => {
    const [bookmark, setBookmark] = useState([]);
    const [readTime, setReadTime] = useState([]);

    const addToBookmark = (bookmarked) => {
        let newBookmark = [];
        const exist = bookmark.find((bm) => bm.id === bookmarked.id);
        if (!exist) {
            newBookmark = [...bookmark, bookmarked];
        } else {
            toast.error("Already bookmarked", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            newBookmark = [...bookmark];
        }
        setBookmark(newBookmark);
    };
    const addReadTime = (readCount) => {
        const newReadTime = [...readTime, readCount];
        setReadTime(newReadTime);
    };
    return (
        <>
            <ToastContainer />
            <div className="lg:flex">
                <div className="lg:basis-[70%]">
                    <Blogs
                        addToBookmark={addToBookmark}
                        addReadTime={addReadTime}
                        bookmark={bookmark}
                    ></Blogs>
                </div>
                <div className="lg:basis-[30%]">
                    <ReadTime readTime={readTime}></ReadTime>
                    <Bookmark bookmark={bookmark}></Bookmark>
                </div>
            </div>
        </>
    );
};

export default Home;
