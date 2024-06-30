import './styles/Home.css'
import './styles/Queries.css'
import { products } from '../../data/localization'
import React, { useEffect, useState } from "react";
import { FaAd, FaCartArrowDown, FaCartPlus, FaChevronCircleRight, FaChevronLeft, FaChevronRight, FaEnvira, FaHeart, FaSearch, FaUser } from 'react-icons/fa';
const MidContent = () => {

    const newArrivals = products.slice(0, 13);
    const latestTrends = products.slice(0, 13);
    const featuredProducts = products.slice(0, 40);
    const topPicks = products.slice(0, 40);
    const featuredBrands = products.slice(0, 61);

    const [startIndex, setStartIndex] = useState(0);
    const [latestStartIndex, setLatestStartIndex] = useState(0);
    const [featuredStartIndex, setFeaturedStartIndex] = useState(0);
    const [topStartIndex, setTopStartIndex] = useState(0);


    const itemsPerPage = 5;
    const next = (name) => {
        console.log(name);
        if (name == 'newArrival') {
            if (startIndex + itemsPerPage < newArrivals.length) {
                setStartIndex(startIndex + itemsPerPage);
            }
        } else if (name == 'latestTrend') {
            if (latestStartIndex + itemsPerPage < latestTrends.length) {
                setLatestStartIndex(latestStartIndex + itemsPerPage);
            }
        } else if (name == 'featuredProduct') {
            if (featuredStartIndex + itemsPerPage < featuredProducts.length) {
                setFeaturedStartIndex(featuredStartIndex + itemsPerPage);
            }
        } else if (name == 'topPick') {
            if (topStartIndex + itemsPerPage < topPicks.length) {
                setTopStartIndex(topStartIndex + itemsPerPage);
            }
        }
    };

    const prev = (name) => {
        if (name == 'newArrival') {
            if (startIndex - itemsPerPage >= 0) {
                setStartIndex(startIndex - itemsPerPage);
            }
        } else if (name == 'latestTrend') {
            if (latestStartIndex - itemsPerPage >= 0) {
                setLatestStartIndex(latestStartIndex - itemsPerPage);
            }
        } else if (name == 'featuredProduct') {
            if (featuredStartIndex - itemsPerPage >= 0) {
                setFeaturedStartIndex(featuredStartIndex - itemsPerPage);
            }
        } else if (name == 'topPick') {
            if (topStartIndex - itemsPerPage >= 0) {
                setTopStartIndex(topStartIndex - itemsPerPage);
            }
        }
    };
    return (
        <>
            <div className="new-arrivals">
                <h3>New Arrivals</h3>
                <div className='button-container'>
                    <button className='button' onClick={() => prev('newArrival')} disabled={startIndex === 0}><FaChevronLeft /></button>
                    <div className="grid-cont-ainer">
                        {newArrivals.slice(startIndex, startIndex + itemsPerPage).map((newArrival, index) => (
                            <div key={index} className="grid-items">
                                <img src={newArrival.image} alt={`Image ${index}`} />
                                <h3>{newArrival.name.slice(0, 40)}... </h3>
                                <p>{newArrival.price ? newArrival.price : '₹499'}</p>
                                <button className="add-to-cart">Add to Cart</button>
                            </div>
                        ))}
                    </div>
                    <button className='button' onClick={() => next('newArrival')} disabled={startIndex + itemsPerPage >= newArrivals.length}><FaChevronRight /></button>
                </div>
            </div>


            <div className="trends">
                <h3>Latest Trends</h3>
                <div className='button-container'>
                    <button className='button' onClick={() => prev('latestTrend')} disabled={latestStartIndex === 0}><FaChevronLeft /></button>
                    <div className="grd-cont-ainer">
                        {latestTrends.slice(latestStartIndex, latestStartIndex + itemsPerPage).map((latestTrend, index) => (
                            <div key={index} className="grd-items">
                                <img src={latestTrend.image} alt={`Image ${index}`} />
                                <h3>{latestTrend.name.slice(0, 40)}... </h3>
                                <p>{latestTrend.price ? latestTrend.price : '₹499'}</p>
                                <button className="add-to-cart">Add to Cart</button>
                            </div>
                        ))}
                    </div>
                    <button className='button' onClick={() => next('latestTrend')} disabled={latestStartIndex + itemsPerPage >= latestTrends.length}><FaChevronRight /></button>
                </div>
            </div>


            <div className="trends">
                <h3>Featured Products</h3>
                <div className='button-container'>

                    <button className='button' onClick={() => prev('featuredProduct')} disabled={featuredStartIndex === 0}><FaChevronLeft /></button>

                    <div className="grd-cont-ainer">
                        {featuredProducts.slice(featuredStartIndex, featuredStartIndex + itemsPerPage).map((featuredProduct, index) => (
                            <div key={index} className="grd-items">
                                <img src={featuredProduct.image} alt={`Image ${index}`} />
                                <h3>{featuredProduct.name.slice(0, 40)}... </h3>
                                <p>{featuredProduct.price ? featuredProduct.price : '₹499'}</p>
                                <button className="add-to-cart">Add to Cart</button>
                            </div>
                        ))}

                    </div>
                    <button className='button' onClick={() => next('featuredProduct')} disabled={featuredStartIndex + itemsPerPage >= featuredProducts.length}><FaChevronRight /></button>
                </div>
            </div>

            <div className="trends">
                <h3>Season's Top picks</h3>
                <div className='button-container'>
                    <button className='button' onClick={() => prev('topPick')} disabled={topStartIndex === 0}><FaChevronLeft /></button>

                    <div className="grd-cont-ainer">
                        {topPicks.slice(topStartIndex, topStartIndex + itemsPerPage).map((topPick, index) => (
                            <div key={index} className="grd-items">
                                <img src={topPick.image} alt={`Image ${index}`} />
                                <h3>{topPick.name.slice(0, 40)}... </h3>
                                <p>{topPick.price ? topPick.price : '₹499'}</p>
                                <button className="add-to-cart">Add to Cart</button>
                            </div>
                        ))}

                    </div>
                    <button className='button' onClick={() => next('topPick')} disabled={topStartIndex + itemsPerPage >= topPicks.length}><FaChevronRight /></button>
                </div>
            </div>
        </>
    )
}
export default MidContent;