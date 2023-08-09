/* eslint-disable react/prop-types */

const ReadTime = ({readTime}) => {

    let totalReadTime = 0;
    for(const time of readTime){
        totalReadTime = totalReadTime + time.readTime;
    }
    return (
        <div className="m-4 bg-blue-400 py-3 text-center rounded lg:sticky lg:top-16">
            <p className="text-xl font-bold text-blue-900">Spent time on read: {totalReadTime} min</p>
        </div>
    );
};

export default ReadTime;