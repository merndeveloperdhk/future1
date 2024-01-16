import axios from "axios";
import Title from "../Dashboard/Title";
import UseCategory from "../../hooks/UseCategory";

const AddProduct = () => {
  const{data:categories} = UseCategory();
  console.log(categories);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const title = form.title.value;
    const price = form.price.value;
    const details = form.details.value;
    const division = form.division.value;
    const color = form.color.value;
    const category= form.category.value;
    
    const postProducts = {
      name,
      email,
      photo,
      title,
      price,
      details,
      division,
      color,category
     
    };
    console.log(postProducts);

  /*   fetch('http://localhost:5000/addProducts', {
      method:"POST",
      headers:{
        "Content-type": "application/json"
      },
      body:JSON.stringify(postProducts)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId > 0){
        alert('add successfully done')
      }
    }) */
    axios.post('http://localhost:5000/addProducts',postProducts)
    .then(res => {
      console.log(res.data);
      alert(`added successfully ${title}`)
    })
  };
  return (
    <div className="  mx-auto max-w-7xl">
      <section className="p-6 dark:bg-gray-800 dark:text-gray-50 mx-auto ">
        <div className="space-y-2 text-center ">
          <Title>Add Product</Title>
          
        </div>
        <form
          onSubmit={handleSubmit}
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
                  className="w-full border p-2  rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
            </div>
          </fieldset>
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary w-min mx-auto"
          />
        </form>
      </section>
    </div>
  );
};

export default AddProduct;
