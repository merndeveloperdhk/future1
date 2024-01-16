import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";



const Services = () => {
    const[services, setServices]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res =>res.json())
        .then(data => setServices(data))
    },[])

    const handleRange = event => {
        console.log("handle range", event);
    }
    return (
        <div className="my-6">
            <div>
                <h1 className="text-center text-2xl text-orange-600 font-bold">Our Services</h1>
                <h2 className="text-center text-4xl font-bold my-3">Our Service Area</h2>
                <p className="text-center text-xl px-2 md:w-1/2 md:mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            {/*  */}
   <form onSubmit={handleRange}>
   <select className="select select-ghost w-full max-w-xs">
  <option disabled selected>Pick the best </option>
  <option >20 - 40</option>
  <option>50-200</option>
  <option>all</option>
</select>
   </form>
            {/*  */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2" >
                {
                    services.map(service => <ServiceCard 
                        key={service._id}
                        service={service}
                        ></ServiceCard>)
                }
            </div>
            <div className="mt-4 ">
                <button className="btn btn-outline btn-error block mx-auto">More Services</button>
            </div>
        </div>
    );
};

export default Services;