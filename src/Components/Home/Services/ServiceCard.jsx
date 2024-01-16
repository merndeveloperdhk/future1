import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ServiceCard = ({ service }) => {
  const {_id, title, img, price } = service;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-6 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl w-full h-52" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{title}</h2>
          <p className="text-orange-500 font-bold flex justify-between">
            Price: ${price}
            <BsArrowRightCircle></BsArrowRightCircle>
          </p>
          <Link to={`/details/${_id}`}>
          <button className="px-2 py-1  bg-[#3eb4d4] rounded w-24">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
ServiceCard.propTypes = {
  service:PropTypes.object
}