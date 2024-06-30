import React from 'react'
import './about.css'
import { products } from '../../data/localization';
const About = () => {

    let aboutImage = products.find(c => c.id == '1718');

    return (
        <div className='about'>
            <div className='about-details'>

                <h1>About Us</h1>
                <img className='about-img' src={aboutImage.image} alt="Image 1" />

                <h2>Fashion fades, only style remains the same</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ipsam officia tempora suscipit aliquid magni et, voluptas quod, at beatae ullam? Molestiae dolore iusto qui corporis minus veniam sequi assumenda? </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam doloribus molestiae odio adipisci at maiores quae explicabo enim dolore nulla voluptas soluta incidunt veniam veritatis quisquam, iure quod dolorem. Praesentium?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora at, modi unde, accusantium quisquam nam a eius iure voluptatem quas nostrum rerum illo facilis sequi? Quibusdam facilis dolorum repellendus pariatur.</p>
                <div className='line'></div>
                <div className="image-banner-container">
                    {/* <img src="https://img.freepik.com/free-vector/model-girl-sketch_23-2147563559.jpg?ga=GA1.1.2115210507.1711006710&semt=ais_user" alt="" /> */}
                    <img src="https://img.freepik.com/free-vector/fashion-girl-with-long-hair_23-2147512913.jpg?ga=GA1.1.2115210507.1711006710&semt=ais_user" alt="" />
                    {/* <img src="https://cdn.shopify.com/s/files/1/0087/0173/9088/files/SDG_13_160x160.png?v=1692947254" alt="" /> */}
                </div>
                {/* <div className="line"></div> */}
                {/* <div className="image-banner-container"> */}
                    {/* <img src="https://cdn.shopify.com/s/files/1/0087/0173/9088/files/SDG_14_160x160.png?v=1692947320" alt="" /> */}
                    {/* <img src="https://cdn.shopify.com/s/files/1/0087/0173/9088/files/SDG_15_160x160.png?v=1692947340" alt="" /> */}
                    {/* <img src="https://cdn.shopify.com/s/files/1/0087/0173/9088/files/SDG_17_160x160.png?v=1692947363" alt="" /> */}
                {/* </div> */}
                <div className="line"></div>
                <div className='partners-section'>
                    <h2>Our Partners</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis inventore quaerat at sequi ratione pariatur omnis in ipsum aliquid modi quidem quam saepe rerum iusto ut voluptas, magni nobis beatae. </p>
                </div>
            </div>
        </div>
    )
}

export default About
