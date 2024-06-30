import React from 'react'
import './productDetails.css'
import SectionComponent from '../../components/sectionComponent/SectionComponent'
import Faqs from '../../components/FAQs/Faqs'
import SlidingCard from '../../components/SlidingCard/SlidingCard'
import CircleCard from '../../components/CircleCard/CircleCard'

const ProductDetails = () => {

    return (
        <div className='productDetails-container'>
            <SectionComponent />
            <Faqs />
            <SlidingCard heading="Similar Products" />
            <SlidingCard heading="You may also like" />
            <CircleCard />
        </div >
    )
}

export default ProductDetails





