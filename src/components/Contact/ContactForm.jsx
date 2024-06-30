import React, { useEffect, useState } from "react";
import { FaAd, FaCartArrowDown, FaCartPlus, FaChevronCircleRight, FaChevronLeft, FaChevronRight, FaEnvira, FaHeart, FaSearch, FaUser } from 'react-icons/fa';
import validator from "validator";

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [emailValidationMessage, setEmailValidationMessage] = useState('');


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        // setFormData(values => ({ ...values, [name]: value }));
        if (name == 'email') {
            if (!validator.isEmail(value)) {
                setEmailValidationMessage("Please enter a valid email!");
            } else {
                setEmailValidationMessage("");
            }
           // console.log(emailValidationMessage);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    

    return (


        <div className="contact-page">
            <div className="contact-form-grid">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Enter your name" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter your email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        {emailValidationMessage && <span className="error-message">{emailValidationMessage}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Enter your message" name="message" value={formData.message} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default ContactForm;