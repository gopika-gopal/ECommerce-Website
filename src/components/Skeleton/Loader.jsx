import React from 'react';
import './SkeletonLoader.css'; // Import the CSS file for styling

const Loader = () => {
    return (
        <div className="skeleton-loader-container">
            <div className="skeleton-loader-animation"></div>
            <div className="skeleton-loader-animation"></div>
            <div className="skeleton-loader-animation"></div>
            <div className="skeleton-loader-animation"></div>
            <div className="skeleton-loader-animation"></div>
            <div className="skeleton-loader-animation"></div>
            <div className="skeleton-loader-animation"></div>
            <div className="skeleton-loader-animation"></div>
        </div>
    );
};

export default Loader;
