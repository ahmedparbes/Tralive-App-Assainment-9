import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-style font">
            <div>
                <img src="https://preview.colorlib.com/theme/kindergarten/assets/img/logo/xlogo2_footer.png.pagespeed.ic.9Jz8KhWoyy.webp" alt="" />
                <p>Users and submit their own items.<br />
                    You can create ifferent packages<br />
                    and by  connecting with your<br />
                    PayPal or Stripe account<br />
                    charge users for registration.</p>
            </div>
            <div className="footer-link">
                <h2>Quick Links</h2>
                <ul className="about-pages">
                    <li>Classes</li>
                    <li>Join with us</li>
                    <li>About</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div>
                <h2>About Us</h2>
                <ul className="about-pages">
                    <li>Our Team</li>
                    <li>Privacy Policy</li>
                    <li>Testimonial</li>
                    <li>Programing</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;