import { useQuery } from '@tanstack/react-query';


const UseCategory = () => {
    const {data, isLoading, isFetching, refetch} = useQuery({
        queryKey:["categories"],
        queryFn: async () => {
            const data = await fetch('http://localhost:5000/categories');
            return await data.json();
            
          },
        }) ;
        // console.log(data, isLoading, isFetching, refetch)
    return ( {data, isLoading, isFetching, refetch});
};

export default UseCategory;