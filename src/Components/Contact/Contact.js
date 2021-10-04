import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import './Contact.css'

const Contact = () => {
    return (
        <Container>
            <h2 className="contact-h2">Contact US</h2>
            <div className="contact">
                <p> Office Hours Weekdays:   7:00 am to 4:30 pm</p>
                <p>Weekends and Holidays:   Closed</p>
                <h4>
                    Address:	200 West Puainako St.
                    Hilo, HI 96720
                    Phone:	(808) 981-7231
                    Fax:	(808) 981-7237
                </h4>
            </div>
            <Footer></Footer>
        </Container>
    );
};

export default Contact;