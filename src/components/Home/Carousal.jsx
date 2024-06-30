import React, { useEffect, useState } from "react";
import { products } from '../../data/localization';
import './styles/Home.css';
import './styles/Queries.css';

const Carousal = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const carousalImages = products.filter(c => c.id == '1708');
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(currentImage => (currentImage + 1) % carousalImages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* <div className="hero-section" style={{ backgroundImage:` url(${carousalImages[currentImage].image})` }}> */}
            <div className="hero-section" style={{
                backgroundImage: `url(${carousalImages[currentImage].image})`,
            }}>
                <div className="hero-content">
                    <h1>Discover the latest trends and freshest styles just in!</h1>
                    <p>Discover amazing styles .....!</p>
                    <a href="/products" className="btn">Explore</a>
                </div>

            </div>
            {/* <div className="sliding-sentence-container">
                <div className="sliding-sentence">
                     💚  Choose from 65,000+ Verified Sustainable Products  💚  Empowering 500+ Sustainable Businesses  💚</div>
            </div> */}
        </>
    )
}

export default Carousal;