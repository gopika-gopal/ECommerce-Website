import React from 'react';
import AddressGrid from './AddressGrid';
import CallUsGrid from './CallUsGrid';
import ContactForm from './ContactForm';
import HoursGrid from './HoursGrid';
import Map from './Map';
// import '../Home/styles/style.css'
import './styles/Contact.css';
import './styles/Queries.css';
// import Header from './Header';
import { products } from '../../data/localization';
import Footer from '../Home/Footer';
import Header from '../Home/Header';
import { FaX } from 'react-icons/fa6';

const ContactUs = () => {

    const handleSubmit = (e) => {
      e.preventDefault();
      onClose(); 
    };

    const contactBackgroundImage = products.find(product => product.id === '1726');
    
    let styles = {
        backgroundImage: `url(${contactBackgroundImage.image})`,
        backgroundSize: 'cover'
    };
    return (
        <>
            <div className="contact-page" style={styles}>
                <div className='contact-us-container'>

                    <div className="contact-form-grid">
                        <h3>GET IN TOUCH</h3>
                        <ContactForm />
                    </div>
                    <div className="google-map-grid">
                        <Map />
                    </div>
                </div>

                <div className='contact-info'>
                    <div className="contact-info-grid">
                        <CallUsGrid />
                    </div>
                    <div className="contact-info-grid">
                        <AddressGrid />
                    </div>
                    <div className="contact-info-grid">
                        <HoursGrid />
                    </div>
                </div>
            </div>




{/* <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={onClose}><FaX/></button>
        <h2>Contact Us</h2>
        <div className='contact-us-container'>
        <div className="address">
            <h3>Address</h3>
            <p>123 Main Street, City, State ZIP</p>
        </div>
        <div className='call-us'>

        </div>
        </div>
      </div>
    </div> */}
        </>

    );
};

export default ContactUs;
