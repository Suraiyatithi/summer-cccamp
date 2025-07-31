
import { useEffect, useState } from 'react';
import Extra from '../Extra';
import Achieve from './Achieve';
import Contact from './Contact';
import Count from './Count';
import Gallery from './Gallary';
import Navimg from './Navimg';
import Photo from './Photo';
import PopularClass from './PopularClass';
import Price from './Price';
import Slider from './Slider';
import Testmonial from './Testmonial';
import Whatdo from './Whatdo';
import Loading from './Loading';
import BlogPage from '../Blog/Blog';
import ScrollProgressBar from '../Blog/Scroll';

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate loading for 3 seconds
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, []);
  
    return (
    
           <div>
           {loading ? (
            <Loading></Loading>
           ) : (
            <div>
              <ScrollProgressBar></ScrollProgressBar>
            <Navimg></Navimg>
            
            <Slider></Slider>
            <Count></Count>
            <Whatdo></Whatdo>
            <Achieve></Achieve>
           
            <Photo></Photo>
            <Extra></Extra>
            <PopularClass></PopularClass>
          
            <Gallery></Gallery>
            <Price></Price>
            <Contact></Contact>
           <BlogPage></BlogPage>
            
            <Testmonial></Testmonial>
        </div>
           )}
         </div>
    );
};

export default Home;