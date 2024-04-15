import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog, handleAddToBookmarks, handleMarkAsRead}) => {
    // console.log(blog)
    const {title, author, author_img, cover, reading_time, post_date, hashtags} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-[700px] h-96' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex gap-6 my-8'>
                    <img src={author_img} alt="" />
                    <div>
                        <h4 className='text-2xl font-bold'>{author}</h4>
                        <p className='text-[#11111199] font-semibold'>{post_date}</p>
                    </div>
                </div>
                <div className='text-[#11111199] font-medium text-xl'>
                    <span>{reading_time} min read</span>
                    <button
                    onClick={()=>handleAddToBookmarks(blog)}
                    className='text-2xl text-red-600 ml-2 mt-10'
                    ><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold'>{title}</h2>
            <p className='text-[#11111199] font-semibold text-xl'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button onClick={() =>handleMarkAsRead(reading_time)} className='text-[#6047EC] font-semibold text-xl underline'>Mark As Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func
}
export default Blog;