import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import './Jobs.css'

const Jobs = () => {
    return (

        <Container>
            <div className="jobs-section">
                <h2>No jobs found. Check back later</h2>
            </div>
            <Footer></Footer>
        </Container >

    );
};

export default Jobs;