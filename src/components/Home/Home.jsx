import Blogs from "../Blogs/Blogs";
import Bookmark from "../Bookmark/Bookmark";
import ReadTime from "../ReadTime/ReadTime";

const Home = () => {
    return (
        <div className="">
            <Blogs></Blogs>
            <div>
                <ReadTime></ReadTime>
                <Bookmark></Bookmark>
            </div>
        </div>
    );
};

export default Home;