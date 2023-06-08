import React from 'react';
import useQuerys from '../../Hooks/useQuery';
import Navimg from '../Home/Navimg'; 
    import Classes from './Classes';

const Allclass = () => {
    const [classes]=useQuerys();

    return (
        <div>
           <Navimg></Navimg>
           <div className="">
            <div className="text-center">
                <h2>ALL CLASSES</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center px-6">
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