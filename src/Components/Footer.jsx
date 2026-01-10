import React from "react";
import "./Footer.css";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer-insurance">
            <div className="container">

                <div className="row gy-5">

                    {/* Brand */}
                    <div className="col-lg-4">
                        <div className="footer-brand">
                            <h3>Insurance</h3>
                            <p>
                                Insurance offers financial protection against unexpected risks,
                                ensuring security and peace of mind for
                                individuals and businesses.
                            </p>
                        </div>

                        <div className="footer-social">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                title="Facebook"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                                title="Twitter"
                            >
                                <FaTwitter />
                            </a>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                title="LinkedIn"
                            >
                                <FaLinkedinIn />
                            </a>
                        </div>

                    </div>

                    {/* Products */}
                    <div className="col-lg-2 col-md-6">
                        <h6 className="footer-title">Products</h6>
                        <ul className="footer-links">
                            <li><a href="/">Corporate Insurance</a></li>
                            <li><a href="/">Health Insurance</a></li>
                            <li><a href="/">Risk Advisory</a></li>
                            <li><a href="/contact">Claims Support</a></li>
                        </ul>
                    </div>

                    {/* Useful Links */}
                    <div className="col-lg-3 col-md-6">
                        <h6 className="footer-title">Useful Links</h6>
                        <ul className="footer-links">
                            <li><a href="/">About Insurance</a></li>
                            <li><a href="/autoinsurance">Auto Insurance</a></li>
                            {/* <li><a href="#">Careers</a></li> */}
                            <li><a href="/lifeinsurance">Life Insurance</a></li>
                            <li><a href="/contact">Customer Support</a></li>
                        </ul>
                    </div>

                    {/* Address */}
                    <div className="col-lg-3">
                        <h6 className="footer-title">Address</h6>
                        <ul className="footer-contact">
                            <li><FaMapMarkerAlt /> New Delhi, India</li>
                            <li><FaPhoneAlt /> +91 6393785945</li>
                            <li><FaEnvelope /> info@insurance.com</li>
                        </ul>
                    </div>

                </div>

                {/* Bottom */}
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Insurance. All Rights Reserved.</p>

                    {/* ✅ Added line */}
                    <p className="footer-developed">
                        Developed by <strong>Sadhana Cybertech (OPC) Pvt. Ltd.</strong>
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
