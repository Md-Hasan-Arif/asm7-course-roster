
import Header from './header';
import Blogs from './Blog/Blogs';
import Card from './Card/card';

const Home = () => {
    return (
        <div>
           <div>
           <Header></Header> 
           </div>
          <div className='flex '>
          <Blogs> </Blogs>
          <Card> </Card>

          </div>
        </div>
    );
};

export default Home;