import React from 'react';
import { Link } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../utils/cartSlice';
import toast from 'react-hot-toast';

const Card = ({ id, name, price, image, stock }) => {

    const dispatch = useDispatch();

    const handleAddToCart = async (cartItem) => {
        if (cartItem.stock < 1)
            return toast.error('Out of Stock');
        dispatch(addToCart(cartItem));
        toast.success("Added to Cart");
    }

    return (
        <div className='productCard'>
            <div className='img-container'>
                <img src={image} alt="product-image" />
                <CiHeart className='wish-icon' />
            </div>
            <div className='product-info'>
                <p>KADAM HAAT</p>
                <Link to={`/product/${id}`}> <h2>{name.slice(0, 40)}...</h2></Link>
                <h1 className='price'>{price || '₹899'}</h1>
                <button onClick={() => handleAddToCart({ id, price, image, name, stock, quantity: 1 })}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default Card;
