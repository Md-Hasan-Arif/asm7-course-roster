import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const { course_name,cover_image,details,price } = blog
    return (
        <div  >
            <div className="card  bg-base-100 shadow-xl ">
                <figure><img src={cover_image} alt="" /></figure>
                <div className=" p-4">
                    <h2 className="text-2xl font-semibold">
                        {course_name}
                    </h2>
                    <p className="text-base font-normal">{details}</p>
                    <div>
                        <div>
                            <p>$ price:{price}</p>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                    <div className="card-actions justify-center">
                        <div><button className="btn btn-primary">Select</button></div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;