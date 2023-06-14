import { useQuery } from "@tanstack/react-query";

const useQuerys = () => {
        const {data: classes = [], isLoading: loading, refetch} = useQuery({
            queryKey: ['classes'],
            queryFn: async() => {
                const res = await fetch('https://summer-camp-server-suraiyatithi.vercel.app/classes');
                return res.json();
            }
        })
    
        return [classes, loading, refetch]
    
};

export default useQuerys;