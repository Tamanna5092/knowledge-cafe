import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    console.log(blog)
    const {title, author, author_img, cover, reading_time, post_date, hashtags} = blog;
    return (
        <div className='mb-20'>
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
                </div>
            </div>
            <h2 className='text-4xl font-bold'>{title}</h2>
            <p className='text-[#11111199] font-semibold text-xl'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;