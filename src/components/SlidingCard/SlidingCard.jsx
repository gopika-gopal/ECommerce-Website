import React from 'react'
import { products } from '../../data/localization'
import './slidingCard.css'
import { Link } from 'react-router-dom'
const SlidingCard = ({ heading }) => {
    return (
        <div className="sliding-container">
            <h1>{heading}</h1>
            <div className='sliding-products'>
                {
                    products?.slice(0, 15).map(product => (
                        <Link to={`/product/${product.id}`} key={product.id} >
                            <div className='productCard featuredCard'>
                                <div className='img-container'>
                                    <img src={product.image} alt="product-image" />
                                </div>
                                <div className='product-info'>
                                    <p>KADAM HAAT</p>
                                    <h2>{product.name.slice(0, 40)}...</h2>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default SlidingCard
