import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const SingleProduct = ({ product }) => {
  const { name, email, photo, title, price, details, category,color, division } = product;
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
            {
              division? <div className="badge badge-outline">{division}</div> : " "
            }
            
            </div>
            <div>
                <Link className="px-3 py-1 rounded bg-blue-500">Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
SingleProduct.propTypes = {
    product:PropTypes.object
  }
