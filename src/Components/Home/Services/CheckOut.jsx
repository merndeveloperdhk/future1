import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider";


const CheckOut = () => {
    const product = useLoaderData();
    const {title,  img, price} = product;
    const{user} = useContext(AuthContext)

    const handleBook = e => {
        e.preventDefault();
        console.log("book", e);
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const number = form.number.value;
        const email = form.email.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const textArea = form.textArea.value;
        const bookedServices = {Customer :  name, date,img, title, number, email, price, quantity,  textArea};
        console.log(bookedServices);

        fetch('http://localhost:5000/bookings', {
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(bookedServices)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert("added successfully")
            }
        })
    }
   
    return (
        <div className="w-3/4 mx-auto bg-slate-50 space-y-8 pb-4 my-4">
            <Link to='/' className="px-2 py-1 bg-green-600 rounded text-white">Back</Link>
            <h1 className="text-center font-bold text-2xl pt-6">Book server: <span className="text-2xl text-orange-600">{title}</span></h1>
            <img className="w-full h-[450px] object-cover px-2 rounded" src={img} alt="" />
            <form onSubmit={handleBook}>
            <div className=" w-full flex justify-center mx-auto gap-7  text-center">
                <input className="border border-black p-1 w-2/5 rounded" type="text" name="name" placeholder=" name" defaultValue={user?.displayName} />
                <input className="border border-black p-1 w-2/5 rounded" name="date" type="date" placeholder="date" />
            </div>
            <div  className=" w-full flex justify-center mx-auto gap-7  text-center my-4">
                <input className="border border-black p-1 w-2/5 rounded" name="number" type="text" placeholder="Your Mobile" />
                <input className="border border-black p-1 w-2/5 rounded" name="email" defaultValue={user?.email} type="text" placeholder="Your Email" />
            </div>
            <div  className=" w-full flex justify-center mx-auto gap-7  text-center my-4">
                <input className="border border-black p-1 w-2/5 rounded" name="price" type="text" defaultValue={' $ ' + price} />
                <input className="border border-black p-1 w-2/5 rounded" name="quantity" type="text" placeholder="Quantity"  />
            </div>
            <div className=" w-full flex justify-center mx-auto gap-4  text-center my-4">

            <textarea className="w-5/6" name="textArea" id="" cols="30" rows="10"></textarea>
            </div>
            <input className="block w-5/6 mx-auto bg-green-500 px-2 py-1 rounded" type="submit" value="Order Confirm" />
            
            </form>
        </div>
    );
};

export default CheckOut;