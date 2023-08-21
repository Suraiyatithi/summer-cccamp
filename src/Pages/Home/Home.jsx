
import Extra from '../Extra';
import Achieve from './Achieve';
import Count from './Count';
import Gallery from './Gallary';
import Navimg from './Navimg';
import PopularClass from './PopularClass';
import Slider from './Slider';
import Whatdo from './Whatdo';

const Home = () => {
    return (
        <div>
            <Navimg></Navimg>
            
            <Slider></Slider>
            <Count></Count>
            <Whatdo></Whatdo>
            <Achieve></Achieve>
            <PopularClass></PopularClass>
            <Gallery></Gallery>
           
            <Extra></Extra>
        </div>
    );
};

export default Home;