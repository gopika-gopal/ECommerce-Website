import { Link } from 'react-router-dom';
import './Style/Dashboard.css';
import useGetProducts from '../../hooks/useGetProducts';
import Loader from '../Skeleton/Loader';
import { toast } from 'react-hot-toast'
import useDeleteProduct from '../../hooks/useDeleteProduct';
import { useEffect, useState } from 'react';

const Product = () => {

    const { allProducts, isloading } = useGetProducts();
    const [productsData, setProductsData] = useState([]);
    useEffect(() => {
        setProductsData(allProducts)
    }, [allProducts])
    const { deleteProduct } = useDeleteProduct();
    const deleteHandler = async (id) => {
        try {
            const res = await deleteProduct(id);
            toast.success('Product Deleted')
        } catch (error) {
            toast.error("Failed to Delete Product")
        }
    }
    return (
        <>
            <div className="dash-container">
                <div className="sidebar">
                    {/* <button className="sidebar-btn active" onClick={() => openSection('product')}>Product</button>
                    <button className="sidebar-btn" onClick={() => openSection('customer')}>Customer</button> */}
                    <p className="sidebar-btn active" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', borderRadius: '5px' }}>Products</p>
                    <Link className="sidebar-btn active" to={"/admin/dashboard/customers"} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', borderRadius: '5px' }}>Users</Link>
                    <Link className="sidebar-btn active" to={"/admin/dashboard/orders"} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', borderRadius: '5px' }}>Orders</Link>
                </div>
                <div className="content">
                    <div className='product-header'>
                        <h2>Products</h2>
                        <Link to={'/admin/dashboard/product/new'} style={{ padding: '10px', backgroundColor: 'lightgreen', border: 'none', borderRadius: '5px', cursor: 'pointer', textDecoration: 'none', color: 'black' }}>Add new </Link>
                    </div>

                    <div id="customer" >

                        <div className="row">
                            <div className="heading">Photo</div>
                            <div className="heading">Name</div>
                            <div className="heading">Price</div>
                            <div className="heading">Stock</div>
                            <div className="heading">Action</div>
                        </div>
                        {isloading ? <Loader />
                            :
                            productsData?.map(product => (
                                <div key={product?.id} className="row">
                                    <div className="subitem"><img style={{ width: '40px', height: '40px' }} src={product.photo} alt="" /></div>
                                    <div className="subitem">{product.name}</div>
                                    <div className="subitem">{product.price}</div>
                                    <div className="subitem">{product.stock}</div>
                                    <div className="subitem">
                                        <Link style={{ textDecoration: 'none', padding: '5px 10px' }} to={`/admin/dashboard/product/${product?._id}`} className="user-edit-button">Edit</Link>
                                        <button onClick={() => deleteHandler(product._id)} style={{ textDecoration: 'none', padding: '7px 12px', margin: '2px' }} className="user-delete-button">Delete</button>
                                    </div>

                                    {/* <div>
                                 <button><i class="fa fa-pencil" aria-hidden="true"></i></button> <button><i class="fa fa-trash" aria-hidden="true"></i></button>
                             </div> */}
                                </div>))
                        }

                    </div>
                </div>
            </div >
        </>
    )
}

export default Product;