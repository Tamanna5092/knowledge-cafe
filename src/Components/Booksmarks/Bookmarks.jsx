import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className='md:w=1/3 bg-[#1111110D] h-fit rounded-xl'>
            <div>
            <h2 className="text-3xl text-center mt-4">Reading Time:{readingTime}</h2>
          </div>
            <h2 className="text-3xl mx-4 mt-7 text-center">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    )
}
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;