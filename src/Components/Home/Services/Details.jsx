import { Link, useLoaderData } from "react-router-dom";


const Details = () => {
    const product = useLoaderData();
    const {_id,title,  img, price} = product;
    return (
        <div className="space-y-3">
            <h1>{title}</h1>
            <img src={img} alt="" />
            <p>{price}</p>
            <Link to={`/checkOut/${_id}`} className="btn btn-sm btn-success"><button>Book Now</button></Link>
        </div>
    );
};

export default Details;