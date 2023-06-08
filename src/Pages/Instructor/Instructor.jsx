
import useQuerys from '../../Hooks/useQuery';
import Navimg from '../Home/Navimg';
import Inst from './Inst';

const Instructor = () => {
    const [classes]=useQuerys();
  
    return (
        <div>
            <Navimg></Navimg>
            <div className="grid md:grid-cols-2 mb-8 border-solid shadow-2xl gap-10 px-6 py-6">
                {
                    classes.map(inst=><Inst key={inst._id} inst={inst}></Inst>)
                }
            </div>
        </div>
    );
};

export default Instructor;