import React, { useEffect, useState } from 'react'
import { products } from '../../data/localization'
import Card from '../../components/Card/Card'
import './productCatalogue.css'
import SlidingCard from '../../components/SlidingCard/SlidingCard'
import CircleCard from '../../components/CircleCard/CircleCard'
import useGetProducts from '../../hooks/useGetProducts'
import Loader from '../../components/Skeleton/Loader'
import { BANNER_IMG } from '../../utils/constants'
import Grid from '../../components/Grid Image/Grid'

const ProductCatalogue = () => {

    const { allProducts, isloading } = useGetProducts();
    const [productsData, setproductsData] = useState([]);
    const handleFilter = (param) => {
        const filteredProducts = allProducts.filter(product => param === product.category)
        // console.log(filteredProducts)
        setproductsData(filteredProducts);
    }

    useEffect(() => {
        setproductsData(allProducts);
    }, [allProducts])
    return (
        <div className='productCatalogue'>
            <div className='main-container'>
                <div className='leftSideBar'>
                    <h1>Main Menu</h1>
                    <ul>
                        <li>Shop All</li>
                        <li onClick={() => handleFilter('care')}>Men</li>
                        <li onClick={() => handleFilter('fashion')}>Women</li>
                        <li onClick={() => handleFilter('eat')}>Kids</li>
                        <li onClick={() => handleFilter('work')}>Unisex</li>
                        <li onClick={() => handleFilter('travel')}>Others</li>
                    </ul>
                </div>
                <div className='rightSideBar'>
                <div className="hero-img">
                    <img src="https://img.freepik.com/free-photo/purchase-sale-discount-fashion-style_53876-15282.jpg?ga=GA1.1.2115210507.1711006710&semt=ais_user" alt="" />
                </div>
                    {/* <div className='hero-img'>
                        <img src={BANNER_IMG} alt="" />
                    </div> */}
                    <h1>All Products For Fashion Lovers</h1>
                    <Grid/>
                    <p className='pagination'>Showing 1 - 48 of 13992 products</p>
                    <div className='productContainer'>
                        {isloading ? <Loader /> :
                            productsData?.slice(0, 30).map(product => (
                                <Card key={product._id} stock={product?.stock} id={product._id} image={product?.photo} name={product?.name} price={product?.price} />
                            ))
                        }
                    </div>
                </div>
            </div>

            <SlidingCard heading="Recently Viewed" />
            <SlidingCard heading="Featured Products" />
            <CircleCard />
        </div>
    )
}

export default ProductCatalogue;
