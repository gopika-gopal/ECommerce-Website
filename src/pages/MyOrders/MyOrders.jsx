import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import './order.css';
import Loader from '../../components/Skeleton/Loader';

const MyOrders = () => {

    const [ordersData, setOrdersData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const fetchMyOrders = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token not found');
            }
            setIsLoading(true);
            const myOrdersData = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/order/my`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setOrdersData(myOrdersData?.data.orders);
            setIsLoading(false);

        } catch (error) {
            console.log(error)
            toast.error('Failed to fetch the orders')
        }
    }
    useEffect(() => {
        fetchMyOrders();
    }, [])
    console.log(ordersData)

    if (ordersData.length === 0)
        return <h1 style={{ padding: '20px', minHeight: '50vh', textAlign : 'center' }}>No Orders....</h1>
    return (
        <div className='orders-section'>
            <h1 className='my-orders-heading'>My Orders</h1>
            {isLoading ? <Loader /> :
                ordersData?.map(order => (
                    <div key={order?._id} className="order-card">
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {
                                order.orderItems.map(item => (
                                    <h3>{item.name}</h3>
                                ))
                            }
                        </div>
                        <p>Price - ₹{order?.total}</p>
                        <p style={{ fontWeight: 'bold' }}>Status: <span style={{ color: 'red' }}> {order?.status}</span></p>
                        <p>Shipping Address : {order.shippingInfo.address},{order.shippingInfo.city},{order.shippingInfo.state},{order.shippingInfo.country.toUpperCase()},{order.shippingInfo.pinCode}</p>
                    </div>

                ))
            }
        </div>
    )
}

export default MyOrders
