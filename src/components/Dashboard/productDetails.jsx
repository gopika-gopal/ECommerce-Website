import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
// import { products } from '../../data/localization';
import axios from 'axios';
import toast from 'react-hot-toast';
import useGetProductDetails from '../../hooks/useGetProductDetails';
import './Style/Dashboard.css';

const AdminProductDetails = () => {

    const { id } = useParams();
    // console.log(id)
    const navigate = useNavigate();
    const { productData } = useGetProductDetails(id);
    const { name, price, photo, category, stock } = productData?.product || {
        _id: "",
        name: "",
        price: 0,
        photo: "",
        category: "",
        stock: 0,
    };


    const changeImageHandler = (e) => {
        const file = e.target.files?.[0];
        setPhoto(file)
    }
    const [Name, setName] = useState('');
    const [Price, setPrice] = useState(0);
    const [Photo, setPhoto] = useState('');
    const [Stock, setStock] = useState(0);
    const [Category, setCategory] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();

        // const formData = new FormData();
        // if (Name) formData.set("name", Name);
        // if (Price) formData.set("price", Price.toString());
        // if (Stock !== undefined)
        //     formData.set("stock", Stock.toString());
        // if (Photo) formData.set("photo", Photo);
        // if (Category) formData.set("category", Category);

        // const res = await updateProduct({
        //   formData,
        //   userId: user?._id!,
        //   productId: data?.product._id!,
        // });
        console.log()
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('Token not found');
        }
        const response = await axios.put(`${import.meta.env.VITE_SERVER}/api/v1/product/${id}`, { name: Name, price: Price, stock: Stock, category: Category, photo: Photo },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        if (response?.data?.success) {
            toast.success(response?.data?.message)
            navigate('/admin/dashboard/products')
        }
    };

    useEffect(() => {
        if (productData?.product) {
            setName(name);
            setPrice(price);
            setStock(stock);
            setCategory(category);
        }
    }, [productData?.product]);

    return (
        <>
            <div className="dash-container">
                <div className="sidebar">
                    <Link className="sidebar-btn active" to={"/admin/dashboard/products"} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', borderRadius: '5px' }}>Product</Link>
                    <Link className="sidebar-btn active" to={"/admin/dashboard/customers"} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', borderRadius: '5px' }}>Customer</Link>
                </div>
                <div className="content">
                    <div id="product" className="tabcontent">

                        <div className="product-container">
                            <div className='product-item'>
                                <img src={photo} alt="Item 1" />
                            </div>
                            <div className="form-container">
                                <h2>Product Details</h2>
                                <form className="item-form" onSubmit={submitHandler}>
                                    <div className="form-group">
                                        <label htmlFor="itemName">Item Name:</label>
                                        <input type="text" id="itemName" name="itemName" value={Name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="price">Price:</label>
                                        <input type="text" id="price" name="price" value={Price} onChange={(e) => setPrice(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="stockNo">Stock No:</label>
                                        <input type="text" id="stockNo" name="stockNo" value={Stock} onChange={(e) => setStock(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="category">Category:</label>
                                        <input type="text" id="category" name="category" value={Category} onChange={(e) => setCategory(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="photo">Photo:</label>
                                        <input type="file" id="photo" name="photo" onChange={changeImageHandler} />
                                    </div>
                                    <button className='update-product-btn' type="submit">Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminProductDetails;