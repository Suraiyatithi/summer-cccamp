import React from 'react';
import useQuerys from '../../Hooks/useQuery';
import Navimg from '../Home/Navimg';
import 
    import Classes from './Classes';

const Allclass = () => {
    const [classes]=useQuerys();

    return (
        <div>
           <Navimg></Navimg>
           <div className="">
            <div className="">
                <h2>ALL CLASSES</h2>
                <div className="">
                    {
                        classes.map(classe=><Classes key={classe._id} classe={classe}></Classes>)
                    }
                </div>
            </div>
           </div>
        </div>
    );
};

export default Allclass;