import { useLoaderData } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import UseCategory from "../../hooks/UseCategory";

const Products = () => {
  const allProducts = useLoaderData();
  const {data:categories} = UseCategory();
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">
        Upload products here {allProducts.length}
      </h1>
      <div className="my-4">
        <div className="join">
          <div>
            <div>
              <input
                className="input input-bordered join-item"
                placeholder="Search"
              />
            </div>
          </div>
          <select className="select w-full max-w-xs" name="category">
                  {
                    categories.map(cat =><option 
                      key={cat._id}
                    >{cat.category}</option> )
                  }
                  
                </select>
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">new</span>
            <button className="btn join-item">Search</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 my-4">
        {allProducts.map((product) => (
          <SingleProduct key={product._id} product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default Products;
