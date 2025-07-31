// import  { useEffect, useState } from 'react';
// import Shorting from './Shorting/Shorting';
// import PrpularINs from './Shorting/PrpularINs';
// import img from '../../assets/clipart514179.png'


// const PopularClass = () => {
//     const [classpic,setclasspic]=useState([])

//     const sortedStudents = classpic.sort((a, b) => b.enrolledStudent - a.enrolledStudent);
//     const topSixStudents = sortedStudents.slice(0, 6);
//     // console.log(topSixStudents)
//     useEffect(()=>{
//         fetch('https://summer-camp-server-suraiyatithi.vercel.app/classes')
//         .then(res=>res.json())
//         .then((data)=>{
      
//             setclasspic(data)
//         })
//     })

//     return (
//         <div className='mt-12 mb-24'>
//       <div className="relative">
//       <div className='flex mx-auto lg:ml-56 -mb-10 s'>
       
//        <img className='w-36 mx-auto ' src={img} alt="" />
//        </div>
//        <p className='text-center text-rose-900 '>___________________________________ </p>
//         <h2 className='text-2xl md:text-4xl font-bold text-center text-purple leading-tight'>Popular Class</h2>
//         <p className='text-center text-rose-900'>___________________________________</p>
//       </div>
// <div className='grid grid-cols-1 md:grid-cols-3 text-center m-8'>
// {
//         topSixStudents.map(pic=><Shorting key={pic._id} pic={pic}></Shorting>)
// }
//        </div>
       

//        <div className="">
//        <div className="relative">
//       <div className='flex mx-auto lg:ml-56 -mb-10 s'>
       
//        <img className='w-36 mx-auto ' src={img} alt="" />
//        </div>
//        <p className='text-center text-rose-900 '>___________________________________ </p>
//         <h2 className='text-2xl md:text-4xl font-bold text-center text-purple leading-tight'>Popular Instructor</h2>
//         <p className='text-center text-rose-900'>___________________________________</p>
//       </div>
//         <div className="grid grid-cols-1 md:grid-cols-6  mt-8 text-center mb-8">
//         {
//         topSixStudents.map(pic=><PrpularINs key={pic._id} pic={pic}></PrpularINs>)
// }
    
//         </div>
//        </div>
//         </div>
//     );
// };

// export default PopularClass;
import { useEffect, useState } from 'react';
import Shorting from './Shorting/Shorting';
import PrpularINs from './Shorting/PrpularINs';
import img from '../../assets/clipart514179.png';

const PopularClass = () => {
  const [classpic, setclasspic] = useState([]);

  useEffect(() => {
    fetch('https://summer-camp-server-suraiyatithi.vercel.app/classes')
      .then((res) => res.json())
      .then((data) => {
        setclasspic(data);
      });
  }, []);

  const sortedStudents = classpic.sort((a, b) => b.enrolledStudent - a.enrolledStudent);
  const topSixStudents = sortedStudents.slice(0, 6);

  return (
    <div className="mt-16 mb-24 px-4 max-w-7xl mx-auto">
      {/* Popular Classes Section */}
      <div className="text-center mb-14">
        <img src={img} alt="icon" className="w-28 mx-auto mb-2" />
        <p className="text-rose-800">────────────────────────────</p>
        <h2 className="text-4xl font-extrabold text-purple-800 mb-2">Popular Classes</h2>
        <p className="text-rose-800">────────────────────────────</p>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          Explore our most enrolled makeup classes that are loved and trusted by students across the platform!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topSixStudents.map((pic) => (
          <Shorting key={pic._id} pic={pic} />
        ))}
      </div>

      {/* Popular Instructor Section */}
      <div className="text-center mt-20 mb-12">
        <img src={img} alt="icon" className="w-28 mx-auto mb-2" />
        <p className="text-rose-800">────────────────────────────</p>
        <h2 className="text-4xl font-extrabold text-purple-800 mb-2">Popular Instructors</h2>
        <p className="text-rose-800">────────────────────────────</p>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          Meet our top-rated instructors who have inspired thousands of learners to build their beauty careers!
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
        {topSixStudents.map((pic) => (
          <PrpularINs key={pic._id} pic={pic} />
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
