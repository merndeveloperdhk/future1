import axios from "axios";
import Title from "./Title";


const AddCategory = () => {
    const handleAdd = e => {
        e.preventDefault();
        const category = e.target.name.value;
        const categoryName = {category}
        console.log(categoryName);
        axios.post('http://localhost:5000/categories', categoryName)
        .then(res => {
            console.log(res.data);
        })
    }
    return (
        <div className=" text-center">
            <Title>Add Category</Title>
            <div className="p-2">
            <form onSubmit={handleAdd} >
                <label htmlFor="category">Category Name :</label>
                <input className="border ml-2" name="name" type="text" /> <br /><br />
                <button className="bg-green-500 px-2 rounded">ADD New Category</button>
                
            </form>
            </div>
        </div>
    );
};

export default AddCategory;