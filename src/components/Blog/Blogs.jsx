import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Blog from './blog';
import Card from '../Card/card';


const Blogs = () => {

    const [blogs, setBlog] = useState([])
    const [SelectedCourse, setCourse] = useState([]);
    const [Remaining, setRemaining] = useState(0);
    const [credit, setCredit] = useState(0);

    const ClickHandler =(blog) =>{
        
        const isExist = SelectedCourse.find((item => item.id == blog.id));
        let addCredit = blog.credit;
        if(isExist){
           return alert ("already exist")
        }
        else{
            SelectedCourse.forEach((item) =>{
                addCredit = addCredit+ item.credit
            })
            const totalRemaining = 20 - addCredit;
            setCredit(addCredit)
            setRemaining(totalRemaining)
            setCourse([...SelectedCourse, blog])
        }
        
        
        
    }

    useEffect(() => {
        fetch('Blog.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])
    return (
        <div className='flex'>
            <div className='grid grid-cols-3 w-3/4'>

                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        clickHandler={ClickHandler}
                    > </Blog>)
                }

            </div>
            <div >
                <Card 
                SelectedCourse = {SelectedCourse} 
                remaining = {Remaining}
                credit = {credit}
                ></Card>
            </div>
        </div>
    );
};

export default Blogs;