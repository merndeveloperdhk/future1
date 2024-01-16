import { useQuery } from "@tanstack/react-query";


const UseProducts = () => {
    const {data, isLoading, isFetching, refetch} = useQuery({
        queryKey:["products"],
        queryFn: async () => {
            const data = await fetch('http://localhost:5000/addProducts');
            return await data.json();
            
          },
        }) ;
        console.log(data, isLoading, isFetching)
    return ( {data, isLoading, isFetching, refetch});
};

export default UseProducts;