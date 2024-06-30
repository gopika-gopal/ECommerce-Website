import { useState } from "react";
import useAddNewProduct from "../../hooks/useAddNewProduct";
import { useNavigate } from 'react-router-dom'
import './Style/CreateForm.css';
import toast from "react-hot-toast";

const CreateForm = () => {

    const navigate = useNavigate();
    const [name, setItemName] = useState('');
    const [errors, setErrors] = useState({
        name: '',
        stock: '',
        price: '',
        category: '',
        photo: ''
    });
    const [price, setPrice] = useState('');
    const [stock, setStockNo] = useState('');
    const [category, setCategory] = useState('');
    const [photo, setPhoto] = useState(null);
    // const [photoPrev, setPhotoPrev] = useState("");
    const { addNewProduct } = useAddNewProduct();
    const handleAddItem = async () => {
        // console.log('Item added:', { name, price, stock, category, photo });

        let formIsValid = true;
        const newErrors = { ...errors };

        if (!name.trim()) {
            newErrors.name = 'Full Name is required';
            formIsValid = false;
        }

        if (!price.trim()) {
            newErrors.price = 'Price is required';
            formIsValid = false;
        }

        if (!stock) {
            newErrors.stock = 'Stock is required'
            formIsValid = false;
        }

        if (!category) {
            newErrors.category = 'Category is required'
            formIsValid = false;
        }

        if (!photo) {
            newErrors.photo = 'Photo is required'
            formIsValid = false;
        }
        setErrors(newErrors);

        if (formIsValid) {
            // const formData = new FormData();
            // formData.set("name", name);
            // formData.set("price", price.toString());
            // formData.set("stock", stock.toString());
            // formData.set("photo", photo);
            // formData.set("category", category);
            const resp = await addNewProduct({ name, price, stock, category, photo })
            // console.log(resp)
            if (resp.success) {
                navigate('/admin/dashboard/products');
            }
        }

    };

    const handleFileChange = (e) => {
        // const file = e.target.files?.[0];
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            setPhoto(reader.result)
        };
        reader.onerror = () => {
            toast.error('Failed to upload image')
        }
    };

    return (
        <div className="createform">
            <h2>Add New Product</h2>
            <form>
                <div className="createform-field">
                    <label>Item Name:</label>
                    <input type="text" value={name} onChange={(e) => setItemName(e.target.value)} />
                    {errors.name && (
                        <p className='error-message'>{errors.name}</p>
                    )}
                </div>
                <div className="createform-field">
                    <label>Price:</label>
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                    {errors.price && (
                        <p className='error-message'>{'*'}{errors.price}</p>
                    )}
                </div>
                <div className="createform-field">
                    <label>Stock No:</label>
                    <input type="text" value={stock} onChange={(e) => setStockNo(e.target.value)} />
                    {errors.stock && (
                        <p className='error-message'>{'*'}{errors.stock}</p>
                    )}
                </div>
                <div className="createform-field">
                    <label>Category:</label>
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                    {errors.category && (
                        <p className='error-message'>{'*'}{errors.category}</p>
                    )}
                </div>
                <div className="createform-field">
                    <label>Photo:</label>
                    <input type="file" onChange={handleFileChange} />
                    {errors.photo && (
                        <p className='error-message'>{'*'}{errors.photo}</p>
                    )}
                </div>
                <button className="add-btn" type="button" onClick={handleAddItem}>Add Item</button>
            </form>
        </div>
    )
}

export default CreateForm;  