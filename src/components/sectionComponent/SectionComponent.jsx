import React, { useState } from 'react';
import { products } from '../../data/localization'
import { useParams } from 'react-router-dom'
import './section.css';
import useGetProductDetails from '../../hooks/useGetProductDetails';
import Loader from '../Skeleton/Loader';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../utils/cartSlice';
import toast from 'react-hot-toast';

const SectionComponent = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    // const product = products.find((e) => e.id === String(id));
    const { productData, isloading } = useGetProductDetails(id);
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    const { name, price, photo, stock, category } = productData?.product || [];

    const handleAddToCart = async (cartItem) => {
        if (cartItem.stock < 1)
            return toast.error('Out of Stock');
        dispatch(addToCart(cartItem));
        toast.success("Added to Cart");
    }

    const toggleAccordion = () => {
        setIsAccordionOpen(!isAccordionOpen);
    };
    return isloading ? <Loader /> : (
        <div className="two-section-container">
            <div className="left-section">
                <img
                    src={productData?.product?.photo}
                    alt="Left Section Image"
                    className="left-image"
                />
            </div>
            <div className="right-section">
                <div className="product-details">
                    <h1>{name}</h1>
                    <p className='product-category'>{category}</p>
                    <p className='price'>Price - {price || '899'}</p>
                    <div className='buttons-container'>
                        <button className="add-to-cart" onClick={() => handleAddToCart({ id, price, photo, name, stock, quantity: 1 })}> ADD TO CART</button>
                        <button className="buy-now">BUY NOW</button>
                    </div>
                    <p>{productData?.product?.desc} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt alias quisquam tenetur laboriosam commodi? Quidem qui a pariatur necessitatibus amet.</p>
                </div>
                <div className="accordion">
                    <div className="accordion-btn" onClick={toggleAccordion}>
                        <p>Details</p>
                        <p>{isAccordionOpen ? '-' : '+'}</p>
                    </div>
                    {isAccordionOpen && (
                        <div className="accordion-content">
                            {/* Accordion content goes here */}
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus delectus maiores quibusdam sed laborum expedita saepe iste inventore ipsum, officia nesciunt quam eveniet cupiditate facere pariatur, at cum omnis? Sunt.</p>
                            <p>Additional details about the product...</p>
                        </div>
                    )}
                </div>
                <div className="accordion">
                    <div className="accordion-btn" onClick={toggleAccordion}>
                        <p>Details</p>
                        <p>{isAccordionOpen ? '-' : '+'}</p>
                    </div>
                    {isAccordionOpen && (
                        <div className="accordion-content">
                            {/* Accordion content goes here */}
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus delectus maiores quibusdam sed laborum expedita saepe iste inventore ipsum, officia nesciunt quam eveniet cupiditate facere pariatur, at cum omnis? Sunt.</p>
                            <p>Additional details about the product...</p>
                        </div>
                    )}
                </div>
                <div className="customer-reviews">
                    <div className='review-btn'>
                        <h3>Customer Reviews</h3>
                        <p>Write a Review</p>
                    </div>
                    <div className="review">
                        <p>Customer Name</p>
                        <p>Rating: 5 stars</p>
                        <p>Review: Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    </div>
                    <div className="review">
                        <p>Customer Name</p>
                        <p>Rating: 5 stars</p>
                        <p>Review: Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    </div>
                    <div className="review">
                        <p>Customer Name</p>
                        <p>Rating: 5 stars</p>
                        <p>Review: Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    </div>
                    {/* Add more reviews as needed */}
                </div>
                <div className="qa-section">
                    <h3>Q&A</h3>
                    <div className="qa">
                        <p><strong>Q: Are your products made from sustainable materials?</strong></p>
                        <p>Are your products made from sustainable materials?</p>
                    </div>
                    <div className="qa">
                        <p><strong>Q: How are your products packaged?
                        </strong></p>
                        <p>A: We use eco-friendly packaging materials such as recycled cardboard and biodegradable plastics to reduce waste.

                        </p>
                    </div>
                    <div className="qa">
                        <p><strong>Q: Are your products certified organic?
                        </strong></p>
                        <p>A: Yes, our products are certified organic by [certification body] to ensure they meet strict environmental standards.

                        </p>
                    </div>
                    <div className="qa">
                        <p><strong>QQ: What steps do you take to reduce carbon emissions in your production process?
                        </strong></p>
                        <p>A: We implement energy-efficient practices and offset carbon emissions through eco-friendly initiatives like tree planting projects.</p>
                    </div>
                    {/* Add more Q&A pairs as needed */}
                </div>
            </div>
        </div >
    );
};

export default SectionComponent;
