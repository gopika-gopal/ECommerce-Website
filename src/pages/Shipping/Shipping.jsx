import React, { useEffect, useState } from 'react'
import './shipping.css'
import { resetCart, saveShippingInfo } from '../../utils/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
const Shipping = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector(state => state.token)
    const user = useSelector((state) => state.user);
    const { cartItems, total, subtotal, tax, shippingCharges } = useSelector(
        (state) => state.cart
    );
    const [shippingInfo, setShippingInfo] = useState({
        address: "",
        city: "",
        state: "",
        country: "",
        pinCode: "",
    });

    const changeHandler = (e) => {
        setShippingInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        dispatch(saveShippingInfo(shippingInfo));
    };

    const submitPaymentHandler = async (e) => {
        const response = await axios.post(`${import.meta.env.VITE_SERVER}/api/v1/payment/paymentIntent`,
            {
                amount: total * 100,
                currency: "INR",
                receipt: 'jdsnks'
            });
        const order = await response.data;

        var options = {
            key: import.meta.env.RAZORPAY_ID_KEY,
            total: total * 100,
            currency: "INR",
            name: user?.firstName,
            description: "Transaction",
            order_id: order.id,
            handler: async function (response) {
                const body = {
                    ...response,
                }
                const validate = await axios.post(`${import.meta.env.VITE_SERVER}/api/v1/payment/validate`, body);
                const jsonRes = await validate.data;
                if (jsonRes.message === 'success') {
                    toast.success('Payment Successfull')

                    try {
                        const newOrder = await axios.post(`${import.meta.env.VITE_SERVER}/api/v1/order/new`,
                            { _id: order.id, shippingInfo, orderItems: cartItems, userId: user._id, subtotal, tax, shippingCharges, total }, {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            }
                        }
                        )

                        if (newOrder) {
                            toast.success('Order Placed Successfully');
                            navigate('/myOrders');
                        }
                    } catch (error) {
                        toast.error('Failed to place order');
                    }

                    dispatch(resetCart());
                    // navigate('/');
                }
                else {
                    toast.error("Transaction Failed")
                }
            },
            prefill: {
                name: user?.firstName,
                email: user?.email,
                contact: ""
            },
            notes: {
                address: shippingInfo?.address
            },
            theme: {
                color: "#3399cc"
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.on('payment.failed', function (response) {
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
        });
        rzp1.open();
        e.preventDefault();
    }

    // useEffect(() => {
    //     if (cartItems.length <= 0) return navigate("/cart");
    // }, [cartItems]);

    return (
        <div className='shipping-container'>
            <form onSubmit={submitHandler} className='shipping-form'>
                <h1>Shipping Address</h1>
                <input
                    required
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={shippingInfo.address}
                    onChange={changeHandler}
                />
                <input
                    required
                    type="text"
                    placeholder="City"
                    name="city"
                    value={shippingInfo.city}
                    onChange={changeHandler}
                />
                <input
                    required
                    type="text"
                    placeholder="State"
                    name="state"
                    value={shippingInfo.state}
                    onChange={changeHandler}
                />
                <select
                    name="country"
                    required
                    value={shippingInfo.country}
                    onChange={changeHandler}
                >
                    <option value="">Choose Country</option>
                    <option value="india">India</option>
                    <option value="america">America</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                </select>
                <input
                    required
                    type="number"
                    placeholder="Pin Code"
                    name="pinCode"
                    value={shippingInfo.pinCode}
                    onChange={changeHandler}
                />
                <button type="submit" onClick={submitPaymentHandler}>Pay Now</button>
            </form>
        </div>
    )
}

export default Shipping
