import React from 'react';
import './Home.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';
import Footer from '../Footer/Footer';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./Service.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (

        // Services Section

        <Container>
            <header className="header-Style">
                <div className="header-single-components">
                    {/* <h1>Quality Learning For Every Child </h1>
                    <button> <a href="">Explore Classes</a> </button> */}
                </div>
            </header>
            {/* Section */}
            <div className="first-section">
                <h1>Welcome to our <span className="names">Kindergarten</span> </h1>
                <p>Our set he for firmament morning sixth subdue today the darkness creeping gathered divide our let god moving today. Moving in fourth air night bring upon lesser subdue fowl male signs.</p>
            </div>

            {/* Second Section */}

            <div className="service-one">
                <div>
                    <h3>Inter School Sports</h3>
                    <p>The words you use in your written communica speak volumes.</p>

                    <h2>Friendly Environment</h2>
                    <p>The words you use in your written communica speak volumes.</p>

                    <h2>Friendly Environment</h2>
                    <p>The words you use in your written communica speak volumes.</p>


                </div>

                <div>
                    <img src="https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/xabout2.png.pagespeed.ic.ipGkV6Rd8O.webp" alt="" />
                </div>
            </div>



            <h2 className="service-title">Our Top Services</h2>
            <div className="service">

                {
                    services.map(service => <Service service={service}></Service>)
                }

            </div>

        </Container>
    );
};

export default Home;
