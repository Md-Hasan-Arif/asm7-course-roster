import React, { useState } from 'react';
import Header from './header';

import Blogs from './Blog/Blogs';

const Home = () => {
    

   
 return (
        <div>
           <div>
           <Header></Header> 
           </div>
           <div >
           <Blogs > </Blogs>
           

          </div>
        
        </div>
    );
};

export default Home;