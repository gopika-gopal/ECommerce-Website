import React from "react";
import { products } from '../../data/localization';
import './styles/Home.css';
import './styles/Queries.css';

const BottomContent = () => {

    const gridData = [
        { heading: 'Sustainable Solutions', subheading: 'Innovative approaches for a greener tomorrow' },
        { heading: 'Community Engagement', subheading: 'Empowering change through collective action' },
        { heading: 'Eco-Friendly Products', subheading: 'Nurturing the planet with every purchase' },
        { heading: 'Climate Action', subheading: 'Making strides towards a carbon-neutral future' },
        { heading: 'Biodiversity Conservation', subheading: 'Protecting ecosystems for generations to come' },
        { heading: 'Renewable Energy', subheading: 'Harnessing the power of nature for clean energy' },
        { heading: 'Sustainable Agriculture', subheading: 'Cultivating a healthier planet through mindful farming' },
        { heading: 'Waste Reduction', subheading: 'Minimizing waste, maximizing impact' }
    ];
  
    const featuredBrands = products.filter(c =>c.id =='1720' ||c.id =='1721' ||c.id =='1722'||c.id =='1723'||c.id =='1724'||c.id =='1725');

  return (
        <>
            {/* <div className='our-impacts'>
                <h3>Our Impacts</h3>
                <div className="impact-container">
                    {gridData.map((item, index) => (
                        <div key={index} className="grid-impact">
                            <h2 className="heading">{item.heading}</h2>
                            <p className="subheading">{item.subheading}</p>
                        </div>
                    ))}
                </div>
            </div> */}

            <div className='featured-brands'>
                <h3>Featured Brands</h3>
                <div className="featured-container">
                    {featuredBrands.map((item, index) => (
                        <div key={index} className="grid-featured">
                            <a href="#"> <img src={item.image} alt={`Image ${index}`} /></a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BottomContent;