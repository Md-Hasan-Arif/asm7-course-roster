import PropTypes from 'prop-types';



const Blog = ({ blog, clickHandler }) => {
    const { course_name, cover_image, details, price, credit } = blog



    return (
        <div className='m-2 border-2'  >


            <div className=" card w-full h-full bg-base-100 shadow-xl text-left ">
                <img className='p-4' src={cover_image} alt="" />
                <div className=" p-4">
                    <h2 className="text-base font-semibold ">
                        {course_name}
                    </h2>
                    <p className="text-base font-normal">{details}</p>
                    <div className='flex gap-2 text-base font-semibold mt-2'>
                        <div className='flex-1 '>
                            <div className='flex gap-1'>
                                <div>
                                    <img src="https://i.ibb.co/wB2C44C/dollar-sign-1.jpg" alt="" />
                                </div>
                                <div>
                                    <p> price:{price} </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div className='flex gap-1'>
                                <div>
                                    <img src="https://i.ibb.co/0y80d2b/Frame.jpg" alt="" />
                                </div>
                                <div>
                                    <p>credit : {credit}hr</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-actions justify-center mt-2">
                        <div>
                            <button
                                onClick={()=>clickHandler(blog)}
                                className="btn btn-primary w-full"
                            >Select</button>
                        </div>

                    </div>
                </div>
            </div>


        </div>

    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    // clickHandler: Proptypes.func
}

export default Blog;