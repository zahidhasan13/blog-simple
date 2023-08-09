/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Blog = (props) => {
    const {
        blogTitle,
        coverImg,
        authorName,
        authorImg,
        publishDate,
        readTime,
    } = props.blog;
    const addToBookmark = props.addToBookmark;
    const addReadTime = props.addReadTime;
    const alreadyAdded = props.already;
    const isAlreadyAdded = alreadyAdded.some((bm) => bm.id === props.blog.id);

    return (
        <div>
            <img src={coverImg} alt="" className="w-full rounded" />
            <div className="flex justify-between items-center m-4">
                <div className="flex items-center">
                    <img
                        src={authorImg}
                        alt=""
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-4">
                        <h2 className="text-xl font-bold">{authorName}</h2>
                        <p className="text-sm text-gray-500">{publishDate}</p>
                    </div>
                </div>
                <div className="text-md text-gray-500">
                    <span>
                        {readTime} min read{" "}
                        <button onClick={() => addToBookmark(props.blog)}>
                            <FontAwesomeIcon
                                icon={faBookmark}
                                className={isAlreadyAdded ? "text-red-500" : ""}
                            />
                        </button>
                    </span>
                </div>
            </div>
            <div className="m-4">
                <h1 className="text-3xl font-bold mb-6">{blogTitle}</h1>
                <button
                    onClick={() => addReadTime(props.blog)}
                    className="text-blue-700 font-medium lg:hover:underline"
                >
                    mark as read
                </button>
            </div>
        </div>
    );
};

export default Blog;
