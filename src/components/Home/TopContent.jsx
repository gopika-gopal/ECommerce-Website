import React from "react";
import { products } from '../../data/localization';
import './styles/Home.css';
import './styles/Queries.css';

const TopContent=()=>{

    let offerImage1 = products.find(c => c.id == '1712');
    const categoryImages = products.slice(1, 11);


    return(
        <>
         <div className='Heading-text'>
        <h2 className='Heading-text-h2'>Unique styles you won't find anywhere else. Be bold, be different, be exclusive</h2>
        <p className='Heading-text-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem error atque ullam voluptates quis, tenetur facere ipsam officiis. A velit asperiores expedita quisquam officiis adipisci, quos illo quam facere voluptatum.</p>
    </div>
          <div className="category">
          {categoryImages.map((categoryImage, index) => (
                <div key={index} className="category-container">
                    <div  className="category-item">
                        <img src={categoryImage.image} alt={`Image1`} />
                    </div>
                    <div className="TXT">{categoryImage.overlaytext}</div>
                </div>
            ))}
            </div>
            {/* <div className='offer-text'>
                <h2>✨ Don't Miss Out! Limited Time Offer! ✨</h2>
            </div>
            <div className="grid-container">
                <div className="grid-item">
                    <img src={offerImage1.image} alt="Image 1" />
                    <div className="overlay-text">30% off on Bags</div>
                </div>
                <div className="grid-item">
                    <img src={offerImage2.image} alt="Image 2" />
                    <div className="overlay-text">50% off on Kitchen Accessories</div>
                </div>
                <div className="grid-item">
                    <img src={offerImage3.image} alt="Image 3" />
                    <div className="overlay-text">25% off on Home Decors</div>
                </div>
            </div> */}
               <div className="offer-container">

<div className='offer-text'>
        {/* <h2>✨ Don't Miss Out! Limited Time Offer! ✨</h2> */}
     </div>
    {/* <h2 className="offer-heading">We make sustainable living easy and fun for you. Find innovative, good quality & plastic free alternatives to everyday essentials.</h2> */}

    <div className="offer-grid">
        <div className="grid-item">
        <img src={offerImage1.image} alt="Image 1" className="grid-image" />
        </div>
        <div className="grid-item">
            <div className="description">
                <h3>Heading</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi possimus mollitia exercitationem aut ducimus, vitae architecto provident obcaecati consequuntur rerum eum eligendi tempora illum eius reprehenderit, delectus necessitatibus amet eaque.</p>
                {/* <button className="Hurry-Btn">Hurry Up</button> */}
            </div>
            
        </div>
    </div>
    
</div>
        </>
    )
}
export default TopContent;