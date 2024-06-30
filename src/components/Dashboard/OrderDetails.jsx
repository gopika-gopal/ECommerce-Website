import { Link } from 'react-router-dom';
import useGetAllOrders from '../../hooks/useGetAllOrders';
import Loader from '../Skeleton/Loader';
import './Style/Dashboard.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const OrderDetails = () => {

    const user = useSelector(state => state.user);
    const { allordersData, isLoading } = useGetAllOrders();

    const [ordersData, setOrdersData] = useState([]);
    useEffect(() => {
        setOrdersData(allordersData)
    }, [allordersData]);

    const deleteOrder = async (id) => {
        try {
            const token = localStorage.getItem('token')
            if (!token) throw new Error('Token not found')
            const resp = await axios.delete(`${import.meta.env.VITE_SERVER}/api/v1/order/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            toast.success('Order deleted')
        } catch (error) {
            console.log(error)
        }
    }

    const processOrder = async (id) => {
        try {
            const token = localStorage.getItem('token')
            if (!token) throw new Error('Token not found')
            const resp = await axios.put(`${import.meta.env.VITE_SERVER}/api/v1/order/${id}`, { userId: user?._id });
            toast.success('Order Processed')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="dash-container">
                <div className="sidebar">
                    <Link className="sidebar-btn active" to={"/admin/dashboard/products"} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', borderRadius: '5px' }}>Products</Link>
                    <Link to={"/admin/dashboard/customers"} className="sidebar-btn active" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', borderRadius: '5px' }}>Users</Link>
                    <p className="sidebar-btn active" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', borderRadius: '5px' }}>Orders</p>
                </div>
                <div className="content">
                    <div className='product-header'>
                        <h2>ORDERS</h2>
                    </div>
                    <div id="customer" >
                        <div className="row">
                            <div className="heading">Order ID</div>
                            <div className="heading">Name</div>
                            <div className="heading">Total</div>
                            <div className="heading">Status</div>
                            {/* <div className="heading">Process Order</div> */}
                            <div className="heading">Action</div>
                        </div>
                        {isLoading ?
                            <Loader /> :
                            ordersData?.map(order => (
                                <div key={order?._id} className="row">
                                    <div className="subitem">{order?._id.slice(0, 15)}...</div>
                                    <div className="subitem">{order?.userId?.firstName}</div>
                                    <div className="subitem">{order?.total}</div>
                                    {/* <div className="subitem">{user?.email}</div> */}
                                    <div className="subitem">{order?.status}</div>
                                    <div className="subitem">
                                        <button onClick={() => processOrder(order?._id)} className='process-order-btn' >Process</button>
                                        <button onClick={() => deleteOrder(order?._id)} className="user-delete-button">Delete</button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div >
        </>
    )
}

export default OrderDetails;