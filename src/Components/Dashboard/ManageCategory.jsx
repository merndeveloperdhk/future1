import UseCategory from "../../hooks/UseCategory";
import ManageCatDetails from "./ManageCatDetails";
import Title from "./Title";


const ManageCategory = () => {
    const{data, isLoading,  refetch} = UseCategory();
        if(isLoading == true){
          return <span className="loading loading-spinner loading-xs"></span>
        }
    return (
        <div>
            <Title>Manage Category</Title>
            <h1 className="text-center font-bold my-4">Category length: {data.length}</h1>
            <div >
                {
                    data.map(cate => <ManageCatDetails
                    key={cate._id}
                    cate={cate}
                    refetch={refetch}
                    
                    ></ManageCatDetails>)
                }
            </div>
        </div>
    );
};

export default ManageCategory;