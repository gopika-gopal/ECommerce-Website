import React, { useState } from "react";
import validator from 'validator';
import './styles/Home.css';
import './styles/Queries.css';

const Footer=()=>{
    
    const [newsLetterEmail, setNewsLetterEmail] = useState({
                email: ''
            });

    const [emailValidation, setEmailValidation] = useState('');


    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewsLetterEmail(prevState => ({
            ...prevState,
            [name]: value
        }));
        if (name == 'email') {
            if (!validator.isEmail(value)) {
                setEmailValidation("Please enter a valid email!");
            } else {
                setEmailValidation("");
            }
            // console.log(setEmailValidation);
        }
    };

    return(
        <div style={{width : '100%'}}>
            <footer className="footer">
                <div className="footer-grid">
                    <div className="footer-item">
                        <h3>Contact Info</h3>
                        <p>123 Main Street</p>
                        <p>City, State ZIP</p>
                        <p>Email: info@example.com</p>
                        <p>Phone: 123-456-7890</p>
                    </div>
                    <div className="footer-item">
                        <h3>Customer Service</h3>
                        <p>FAQ</p>
                        <p>Shipping &amp; Returns</p>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                    </div>
                    <div className="footer-item">
                        <h3>Subscribe to Newsletter</h3>
                        <p>Get updates on our latest products and promotions!</p>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Enter your email"id="email" name="email" value={newsLetterEmail.email} onChange={handleChange} required />
                            <button type="submit">Subscribe</button>
                        </form>
                            {emailValidation && <span className="email-error-message">{emailValidation}</span>}
                    </div>
                </div>
                <div className="copyright">
                    <p>© 2024 Your Company Name. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;