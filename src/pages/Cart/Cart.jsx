import React, { useEffect } from 'react'
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import './cart.css'
import { addToCart, calculatePrice, removeCartItems } from '../../utils/cartSlice';
import Loader from '../../components/Skeleton/Loader';
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom';

const Cart = () => {

    const dispatch = useDispatch();
    const {
        cartItems,
        subtotal,
        tax,
        shippingCharges,
        total,
        loading
    } = useSelector(state => state.cart)

    useEffect(() => {
        dispatch(calculatePrice());
    }, [cartItems]);

    const incrementHandler = (cartItem) => {
        if (cartItem.quantity >= cartItem.stock)
            return toast.error("Stock limit reached");
        dispatch(addToCart({ ...cartItem, quantity: cartItem.quantity + 1 }));
    };

    const decrementHandler = (cartItem) => {
        if (cartItem.quantity <= 1) return;
        dispatch(addToCart({ ...cartItem, quantity: cartItem.quantity - 1 }));
    };

    const deleteHandler = (productID) => {
        dispatch(removeCartItems(productID));
        toast.success('Item removed');
    };
    return cartItems.length == 0 ?
        <div className='empty-cart'> Your Cart is Empty.... </div>
        : (
            <div className='cart-container'>
                <h1>My Cart</h1>
                <div className='cart'>
                    <div className="cart-left">
                        <div className='cart-item'>
                            <div className='cartData-image'>Photo</div>
                            <div className='cartData-name'>Name</div>
                            <div className='quantity'>Quantity</div>
                            <div className='cartData-price'>Price</div>
                            <div className='cartData-delete'></div>
                        </div>
                        {
                            loading
                                ?
                                <Loader />
                                :
                                cartItems?.map(cartItem => (
                                    <div key={cartItem?.id} className='cart-item-data'>
                                        <div className='cartData-image'><img src={cartItem?.image} alt="" /></div>
                                        <div className='cartData-name'>{cartItem?.name}</div>
                                        <div className='quantity'>
                                            <button onClick={() => incrementHandler(cartItem)}>+</button>
                                            <div>{cartItem?.quantity}</div>
                                            <button onClick={() => decrementHandler(cartItem)}>-</button>
                                        </div>
                                        <div className='cartData-price'>{cartItem?.price * cartItem?.quantity}</div>
                                        <div className='cartData-delete'><MdDelete onClick={() => deleteHandler(cartItem?.id)} /></div>
                                    </div>
                                ))
                        }
                    </div>
                    <div className="cart-right">
                        <h1>Order summary</h1>
                        <p>SubTotal : ₹ {subtotal}</p>
                        <p>Tax : ₹ {tax}</p>
                        <p>Shipping Charges : ₹ {shippingCharges}</p>
                        <p>Total : ₹ {total}</p>
                        {
                            cartItems.length > 0 &&
                            <Link to={'/shipping'} className='checkout'>Checkout</Link>
                        }
                    </div>
                </div>
            </div>
        )
}

export default Cart
