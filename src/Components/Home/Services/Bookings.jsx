import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider";
import { Link } from "react-router-dom";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
 const[bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  

  useEffect(() => {
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setBookings(data);
    //   });
    axios.get(url, {withCredentials: true})
    .then(res =>{
      setBookings(res.data)
    })
  }, [url]);

  const handleRemove = _id => {
    console.log("Remove", _id);
    const proceed = confirm("Are you sure want to delete?");
    if(proceed){
        fetch(`http://localhost:5000/bookings/${_id}`, {
            method:"DELETE",
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                alert("deleted successfully complete");
                const remaining = bookings.filter(booking => booking._id !== _id);
                setBookings(remaining)
            }
        })
      }
    };

    const handleUpdate = id => {
        console.log("update", id);
        fetch(`http://localhost:5000/bookings/${id}`, {
            method:"PATCH",
            headers:{
                "Content-type": "application/json"
            },
            body:JSON.stringify({status: 'confirm'})
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                alert("updated ok")
                const remaining = bookings.filter(booking => booking._id !== id)
                const updated = bookings.find(booking => booking._id === id)
                updated.status = "confirm"
                const newBookings = [updated, ...remaining]
                setBookings(newBookings)
            }
        })
    }
   
  return (
    <div className=" ">
      <div className="flex mx-auto  flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
        <h2 className="text-xl font-semibold">Your Bookings {bookings.length}</h2>
        <ul className="flex flex-col divide-y dark:divide-gray-700">
            {
                bookings.map(booking =>  <li key={booking._id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4 ">
                  <img
                    className="flex-shrink-0 object-cover block w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                    src={booking.img ? booking.img : "Avatar"}
                    alt={booking.title}
                  />
                  <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold leadi sm:pr-8">
                          {booking.title}
                        </h3>
                        <p className="text-sm dark:text-gray-400"><small>{booking.title}</small></p>
                      </div>
                      <p>{booking.email}</p>
                      <div className="text-right">
                        <p className="text-lg font-semibold">{booking.price}</p>
                        
                      </div>
                    </div>
                    
                    <div className="flex text-sm divide-x">
                      <button onClick={() => handleRemove(booking._id)}
                        type="button"
                        className="flex items-center px-2 py-1 pl-0 space-x-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                          <rect width="32" height="200" x="168" y="216"></rect>
                          <rect width="32" height="200" x="240" y="216"></rect>
                          <rect width="32" height="200" x="312" y="216"></rect>
                          <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                        </svg>
                        <span>Remove</span>
                      </button>
                      <button
                        type="button"
                        className="flex items-center px-2 py-1 space-x-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                        </svg>
                        <span>Add to favorites</span>
                      </button>
                      {booking.status === 'confirm' ? <span className="font-bold text-green-700">confirmed</span>:
                        <button onClick={() => handleUpdate(booking._id)} className="btn btn-accent btn-sm">Please Confirm</button>}
                    
                    </div>
                  
                 
                  </div>
                </div>
              </li>)
            }
         
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount:
            <span className="font-semibold">357 €</span>
          </p>
          <p className="text-sm dark:text-gray-400">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
         <Link to='/'>
         <button
            type="button"
            className="px-6 py-2 border rounded-md dark:border-violet-400"
          >
            Back
            <span className="sr-only sm:not-sr-only">to shop</span>
          </button></Link>
          <button
            type="button"
            className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
          >
            <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
