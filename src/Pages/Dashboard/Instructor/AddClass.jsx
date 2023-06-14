import  { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const AddClass = () => {
    const {user}=useContext(AuthContext);
 
    const{
        register,
        handleSubmit,
        watch,
        formState:{errors},
    }=useForm();
    const onSubmit=(data)=>{
      
        fetch("http://localhost:5000/classes",
        {
            method:"post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((result) => {
          if(result.insertedId){
    
            Swal.fire({
             title: 'Success!',
             text: 'Class Added Successfully',
             icon: 'success',
             confirmButtonText: 'Cool'
         })
         }
          console.log(result);
        });
      console.log(data);
    }
    return (
        <div>
                {/* <div style={{backgroundImage:`url(${bg})`}}></div> */}
                      <div>
                <h3  className=" mt-5 mb-3 text-white pt-5">Add Here If You Want to Add Toy</h3>
            <div className="grid grid-cols-1 w-full md:grid-cols-2">
           <div className="">
           <form onSubmit={handleSubmit(onSubmit)}>
            {errors.exampleRequired && <span>This field is required</span>}
           <div className="mt-12">
           <input
              className="p-2 m-2 w-full rounded shadow-lg border"
              {...register("className")}
              placeholder="Class Name"
              defaultValue="Groming"
            />
           </div>
           <div className="">
          <input
              className="p-2 m-2 w-full rounded shadow-lg border"
              {...register("classImg")}
              placeholder="Class img"
              type="url"
              defaultValue="https://i.ibb.co/5Kg8Zf4/images.jpg"
            />
          </div>

         <div className="">
         <input
              className="w-full ps-12 pe-12 p-2 m-2 rounded shadow-lg border "
            value={user?.displayName}
              {...register("instructorName", { required: true })}
              placeholder="Instructor Name"
            
            />
         </div>
         <div className="">
          <input
              className="p-2 m-2 w-full rounded shadow-lg border"
            //   value={user?.photoURL}
              {...register("instructorImg")}
              placeholder="instructor img"
              type="url"
            //   https://i.ibb.co/q7m4j4J/download.jpg
            />
          </div>
          
         <div className="">
         <input
              className="p-2 m-2 w-full rounded shadow-lg border "
              value={user?.email}
              {...register("email")}
              placeholder="your email"
              type="email"
            />
         </div>
         
        
             <div className="">
          <input
              className="p-2 m-2 w-full rounded shadow-lg border"
              {...register("availableSeat", { required: true })}
              placeholder="Available Seat"
              defaultValue="40"
              type="number"
            />
          </div>
       
          <div className="">
          <input
              className="p-2 m-2 w-full rounded shadow-lg border"
              value={0}
              {...register("enrolledStudent", { required: true })}
              placeholder="Enroll Student"
          
              type="number"
            />
          </div> 
          <div className="">
          <input
              className="p-2 m-2 w-full rounded shadow-lg border"
              {...register("price", { required: true })}
              placeholder="price"
              type="number"
            />
          </div>
          
          <div className="">
          <input
              className="w-full ps-12 pe-12 p-2 m-2 rounded shadow-lg border "
            value="pending"
              {...register("status", { required: true })}
              placeholder="status"
            
            />
         </div>
         <div className="">
          <input 
              className="w-full ps-12 pe-12 p-2 m-2 hidden rounded shadow-lg border "
            value=" "
              {...register("feedback", { required: true })}
              placeholder="feedback"
            
            />
         </div>
           
           <div className="">
           <input style={{background:'DarkOrchid'}} className="btn w-75 ms-2 ps-5 pe-5 pt-2 pb-2 mb-12 text-white" value="Add Class" type="submit" />
           </div>
            </form>
            </div> 
            <div className="col"></div>
           
</div>
</div>  
        </div>
    );
};

export default AddClass;