import React from 'react'
import { products } from '../../data/localization'
import "./Grid.css"
import { Link } from 'react-router-dom'
const Grid = ({ heading }) => {
    return (
        <div className="grid-container">
            <h1>{heading}</h1>
            <div className='grid-products'>
                {
                    products?.slice(0, 13).map(product => (
                        <Link to={`/product/${product.id}`} key={product.id} >
                            <div className='productGrid featuredGrid'>
                                <div className='grid-container'>
                                    <img src={product.image} alt="product-image" />
                                </div>
                                {/* <div className='product-info'>
                                    <p>KADAM HAAT</p>
                                    <h2>{product.name.slice(0, 40)}...</h2>
                                </div> */}
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Grid;
