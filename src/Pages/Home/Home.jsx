
import Extra from '../Extra';
import Achieve from './Achieve';
import Count from './Count';
import Gallery from './Gallary';
import Navimg from './Navimg';
import Photo from './Photo';
import PopularClass from './PopularClass';
import Slider from './Slider';
import Testmonial from './Testmonial';
import Whatdo from './Whatdo';

const Home = () => {
    return (
        <div>
            <Navimg></Navimg>
            
            <Slider></Slider>
            <Count></Count>
            <Whatdo></Whatdo>
            <Achieve></Achieve>
           
            <Photo></Photo>
            <Extra></Extra>
            <PopularClass></PopularClass>
            <Gallery></Gallery>
           
            
            <Testmonial></Testmonial>
        </div>
    );
};

export default Home;