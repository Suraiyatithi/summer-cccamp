import React from 'react';
import { useSpring, animated } from 'react-spring';

const Inst = ({inst}) => {
    const{instructorImg,instructorName,email,className}=inst;
    const styles = useSpring({
        from: { opacity: 0, transform: 'scale(0.5)' },
        to: { opacity: 1, transform: 'scale(1)' },
        config: { duration: 6000 }
      });
    return (
        <div>

              <div className="md:flex justify-center   style={styles} shadow-2xl  border px-3 py-7 mb-4 items-center bg-opacity-60">
                <div>
                    <img style={{height:"10rem" ,width:"15rem"}} src={instructorImg} alt="" />
                </div>
                <div className="md:ml-2">
                  
                    <p className="uppercase">{instructorName}</p>
                    <p>{email}</p>
                    <p>{className}</p>
                    <button style={{background:"DarkOrchid"}} className="btn btn-outline border-0 border-b-4 mt-4 ">See classes</button>
                </div>
            </div>   
        </div>
    );
};

export default Inst;