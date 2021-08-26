import React from 'react'

function Footer() {
    return (
        <div className="footer__wrapper">
            <div className="footer__about">
            <h5>About Us</h5>
            <hr className="underline_" />
            <p className="about_content">
            Real Manlow is a Mathematician,software engineer and Bussines Magnate.
            </p>
            </div>
            <div className="footer__newsletter">
            <h5>Email Us</h5>
            <hr className="underline_" />
            <input className="newsletter_input" placeholder="Your email" />
            </div>
            <div className="footer__contact">
            <h5>Contact Us</h5>
            <hr className="underline_" />
            Contact Us
            </div>
            <div className="footer__followUs"> 
            <h5>Follow Us</h5>
            <hr className="underline_" />
            <h5>Facebook</h5>
            <h5>Instagram</h5>
            <h5>Twitter</h5>
            <h5>Youtube</h5>
            </div>
        </div>
    )
}

export default Footer
