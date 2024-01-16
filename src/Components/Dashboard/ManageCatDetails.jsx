import axios from "axios";
import PropTypes from 'prop-types';

const ManageCatDetails = ({cate, refetch}) => {
const {category, _id} = cate;
    const handleDelete = id => {
        console.log(id);
        axios.delete(`http://localhost:5000/categories/${id}`)
        .then(res => {
            console.log(res.data);
            if(res.data.deletedCount > 0){
              alert(`deleted successfully ${category}`)
              refetch();
    
            }
          })
    }
    return (
       <div className="flex justify-center">
         <div className="flex gap-2 w-40 justify-between px-2 items-center bg-slate-200 my-1 ">
            <h1 className="">{category} </h1>
            <button onClick={()=> handleDelete(_id)} className="btn btn-sm inline-block">Del</button>
        </div>
       </div>
    );
};

export default ManageCatDetails;
ManageCatDetails.propTypes = {
    cate:PropTypes.object,
    refetch:PropTypes.object
  }