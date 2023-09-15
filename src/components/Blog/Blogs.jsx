import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Blog from './blog';

const Blogs = () => {
    const [blogs,setBlog] = useState([])

    useEffect(()=>{
        fetch('Blog.json')
        .then(res => res.json())
        .then(data => setBlog(data))
    },[])
    return (
        <div>
           
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    > </Blog>)
            }
        </div>
    );
};

export default Blogs;