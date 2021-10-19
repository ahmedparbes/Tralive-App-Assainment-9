import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import DisplayData from '../DisplayData/DisplayData';
import Footer from '../Footer/Footer';
import './Services.css'

const Services = () => {
    const [datas, setData] = useState([])
    useEffect(() => {
        fetch('/AllService.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <Container>
            <h1 className="service-title font">Here Our All Services</h1>
            <div className="service">

                {
                    datas.map(data => <DisplayData data={data}></DisplayData>)
                }
            </div>
        </Container>

    );
};

export default Services;