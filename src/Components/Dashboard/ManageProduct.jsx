
import Title from "./Title";
import ManageProductsDetails from "./ManageProductsDetails";
import UseProducts from "../../hooks/UseProducts";


const ManageProduct = () => {
    // const allProducts = useLoaderData();
   
        const{data, isLoading,  refetch} = UseProducts();
        if(isLoading == true){
          return <span className="loading loading-spinner loading-xs"></span>
        }
    
    return (
        <div className="px-2">
            <Title>Manage Product</Title>
            <div>
      <h1 className="text-2xl font-bold text-center">
        Upload products here{data.length}
      </h1>
      {/* <div className="my-4">
        <div className="join">
          <div>
            <div>
              <input
                className="input input-bordered join-item"
                placeholder="Search"
              />
            </div>
          </div>
          <select className="select select-bordered join-item">
            <option disabled selected>
              Search by
            </option>
            <option>Dhaka</option>
            <option>Khulna</option>
            <option>Chittagonj</option>
          </select>
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">new</span>
            <button className="btn join-item">Search</button>
          </div>
        </div>
      </div> */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
        {data.map((product) => (
          <ManageProductsDetails 
          key={product._id}
           product={product}
           refetch={refetch}
           ></ManageProductsDetails>
        ))}
      </div>  
    </div>
        </div>
    );
};

export default ManageProduct;