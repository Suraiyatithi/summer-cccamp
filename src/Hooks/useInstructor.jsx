import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import AxiosSecure from "./AxiosSecure";


const useInstructor = () => {
    const {user} = useContext(AuthContext);
    const [axiossecure] = AxiosSecure();
    const {data: isInstructor, isLoading: isInstructorloading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axiossecure.get(`/users/instructor/${user?.email}`);
            console.log('is instructor response', res)
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorloading]
};

export default useInstructor;