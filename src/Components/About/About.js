import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css'
import Footer from '../Footer/Footer'

const About = () => {
    return (
        <Container>
            <div className="about-section">
                <h3 className="about-h3">About us page</h3>
                <h4>Core Values</h4>
                <p><li>Promoting a school culture that values learning, life skills and professionalism for all.</li>
                    <li> Offering challenging curricula and real-world learning experiences to prepare students for the demands of a successful post-high school life.</li>
                    <li>Developing student voice and engagement as a part of the academic and civic process.</li>
                    <li> Fostering positive, productive relationships among all members of the school community.</li>
                    <li> Cultivating an inclusive environment of health, safety, respect and responsibility.</li></p>

            </div>

        </Container>
    );
};

export default About;
