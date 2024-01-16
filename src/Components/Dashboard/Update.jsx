import {    useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import Title from "./Title";
import UseCategory from "../../hooks/UseCategory";
import axios from "axios";


const Update = () => {

  const {data:categories} = UseCategory();
  console.log("category", categories);
    const navigation = useNavigation();
    console.log(navigation);
    const goTo = useNavigate()
    
    if(navigation.loading == 'loading') return <span className="loading loading-spinner loading-xs"></span>;
    const products = useLoaderData();
    console.log(products);
    const { _id, name, email, photo, title, price, details, division,color } = products;
    
const handleUpdate = async(e) => {
  e.preventDefault()
 const form = e.target;
  const name = form.name.value;
  const email= form.email.value;
  const photo= form.photo.value;
  const title= form.title.value;
  const price= form.price.value;
  const division= form.division.value;
  const category= form.category.value;
  const updatedProduct = {name, email, photo, title, price, division, category};
  console.log(updatedProduct);
 const response = await axios.put(`http://localhost:5000/addProducts/${_id}`, updatedProduct);
 const data = await response.data
  console.log(data);
  if(data.modifiedCount > 0){
    alert(`Update successfully ${title}`)
  }
  goTo('/dashboard/manageProduct')
};

    return (
       <div>
         <div className="  mx-auto max-w-7xl">
      <section className="p-6 dark:bg-gray-800 dark:text-gray-50 mx-auto ">
        <div className="space-y-2 text-center ">
          <Title>Update Product of {name}  </Title>
          
        </div>
        <form
         onSubmit={handleUpdate}
          className="container flex flex-col mx-auto space-y-12 "
        >
          <fieldset className="grid grid-cols-4  gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 ">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="name" className="text-sm">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder=" name"
                  defaultValue={name}
                  className="w-full border p-2  rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="Email"
                  defaultValue={email}
                  className="w-full border p-2  rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="photo" className="text-sm">
                  photo
                </label>
                <input
                  id="photo"
                  type="text"
                  defaultValue={photo}
                  placeholder="photo"
                  className="w-full border p-2  rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="title" className="text-sm">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="Title"
                  defaultValue={title}
                  className="w-full border p-2  rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="price" className="text-sm">
                  Price
                </label>
                <input
                  id="price"
                  type="text"
                  placeholder="Price"
                  defaultValue={price}
                  className="w-full border p-2  rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="details" className="text-sm">
                  Details
                </label>
                <input
                  id="details"
                  type="text"
                  placeholder="Details"
                  defaultValue={details}
                  className="w-full border p-2  rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="division" className="text-sm">
                  Division
                </label>
                <input
                  id="division"
                  type="text"
                  placeholder="division"
                  defaultValue={division}
                  className="w-full border p-2  rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
              <div className="flex flex-col">
              <label htmlFor="category" className="text-sm ">
                  Category
                </label>
                <select className="select w-full max-w-xs " name="category">
                  {
                    categories?.map(cat =><option 
                      defaultValue={cat.category}
                      key={cat._id}
                    >{cat.category}</option> )
                  }
                  
                </select>
              </div>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="color" className="text-sm">
                  color
                </label>
                <input
                  id="color"
                  type="color"
                  placeholder="color"
                  defaultValue={color}
                  className="w-full border p-2  rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
            </div>
          </fieldset>
          <input
            type="submit"
            value="Update"
            className="btn btn-primary w-min mx-auto"
          />
        </form>
      </section>
    </div>
       </div>
    );
};

export default Update;