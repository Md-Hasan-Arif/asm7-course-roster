


const Card = ({ SelectedCourse, remaining, credit }) => {
    console.log(remaining)



    return (
        <div className="mt-2 border-2 text-left p-3 h-1/4">
            <div className="text-lg font-semibold   text-[#2F80ED]">
                <h3>Credit Hour Remaining : {remaining}</h3>
            </div>
            <hr />
            <div>
                <h2 className="text-xl font-bold">Course Name :</h2>
                <div>
                    {
                        SelectedCourse.map((course) => (
                                
                            <li  key={course.id}>{course.course_name}</li>

                        ))
                    }
                </div>
            </div>
            <hr />
            <p className="text-base font-normal">Total Credit Hour :{credit}</p>
            <hr />
            <p className="text-base font-medium">Total Price :</p>

        </div>
    );
};

export default Card; 7