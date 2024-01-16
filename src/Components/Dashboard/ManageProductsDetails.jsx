

import axios from 'axios';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


const ManageProductsDetails = ({product, refetch}) => {
  
    const { _id,name, email, photo, title, price, details, category,color } = product;

    const handleDelete = (id) =>{
      console.log("delete id",id);
      axios.delete(`http://localhost:5000/addProducts/${id}`)
      .then(res => {
        console.log(res.data);
        if(res.data.deletedCount > 0){
          alert(`deleted successfully ${title}`)
          refetch();

        }
      })
    };

    const goTo =  useNavigate();
    return (
        <div>
      <div className="card  bg-base-100 shadow-xl h-96">
        <div className="">
          <img className="w-full object-cover overflow-hidden h-[160px]"
            src={photo}
            alt={title}
          />
        </div>
        <div className="card-body">
            <h1>{name}</h1>
          <h2 className="card-title">
           {title}
            <div className="badge badge-secondary">{category}</div>
          </h2>
            <div className="">{email}</div>
          <p>{details}</p>
          <p>{color}</p>
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
            <div className="badge badge-outline">{price} $</div>
            </div>
            <div className="flex gap-2">
                <button onClick={() =>handleDelete(_id)} className="px-3 py-1 rounded bg-blue-500">Delete</button>
                <button onClick={() => goTo(`/dashboard/updateProduct/${_id}`)} className="px-3 py-1 rounded bg-blue-500">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ManageProductsDetails;
ManageProductsDetails.propTypes = {
    product:PropTypes.object,
    refetch:PropTypes.object
  }