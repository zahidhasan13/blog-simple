/* eslint-disable react/prop-types */

const Bookmark = ({ bookmark }) => {
    // console.log(bookmark);
    return (
        <div className="mx-4 bg-green-400 p-4 rounded lg:sticky lg:top-36">
            <p className="text-lg font-bold">Bookmarked: {bookmark.length}</p>
            <div>
                {bookmark.map((bm) => (
                    <h3 key={bm.id} className="text-xl font-medium">
                        {" "}
                        * {bm.blogTitle}
                    </h3>
                ))}
            </div>
        </div>
    );
};

export default Bookmark;
