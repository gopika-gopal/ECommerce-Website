import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './faq.css'

const Faqs = () => {
    return (
        <section className='faqs-section'>
            <div className='faqs'>
                <h1>Frequently Asked Questions</h1>
                <p>If we still haven't answered your question, you can contact us below and we will be happy to assist you.
                </p>
                <div className='faqs-contact-container'>
                    <div className='faqs-contact'>
                        <FaWhatsapp className='whatsapp' />
                        <h3>WhatsApp</h3>
                        <p>+91-00000000000</p>
                    </div>
                    <div className='faqs-contact'>
                        <MdEmail className='mail' />
                        <h3>Email</h3>
                        <p>xyz@ecoglobal.in</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faqs
