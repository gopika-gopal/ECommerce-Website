import React from 'react'
import './circleCard.css'

const CircleCard = () => {
    return (
        <div className='circle-card-container'>
            {/* <h2>Shop By Material</h2> */}
            <div className='card-container'>
                {/* {materialSection?.map((material, idx) => (
                    <div key={idx} className='circle-card'>
                        <img className='circle-card-img' src={material.image} alt="" />
                        <h2>Made with {material.materialName}</h2>
                    </div>
                ))} */}
            </div>
        </div>
    )
}

export default CircleCard
