import bg from '../assets/eror.jpg'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center'>
            <img className='' src={bg} alt="" />
         <Link to='/'>   <button style={{background:'DarkOrchid'}} className='btn'>Go back to home</button></Link>
            
        </div>
    );
};

export default Error;