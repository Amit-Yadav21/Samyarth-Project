import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aiImage from '../../assets/aiImage.avif'
import { FaFacebookF, FaInstagram, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
      
    return (
        <footer className="footer-bg-color py-4 mt-5 p-2">
            <Row className="text-center text-md-start">
                {/* Left Section */}
                <Col xs={12} md={4} className="mb-4 mb-md-0">
                    <img src={aiImage} alt="Task AI" style={{ width: "200px", marginRight: "10px" }} />
                    <h3>AI Task Manager with Smart Suggestions</h3>
                </Col>

                {/* Airports */}
                <Col xs={12} md={2}>
                    <h5 className="fw-bold under-line-footer-text">AI Task Mannager Info.</h5>
                    <ul className="list-unstyled">
                        <li>Create New Task</li>
                        <li>Update Task</li>
                        <li>View All Task</li>
                        <li>Delete TAsk</li>
                    </ul>
                </Col>

                {/* Useful Links */}
                <Col xs={12} md={2}>
                    <h5 className="fw-bold under-line-footer-text">Useful Links</h5>
                    <ul className="list-unstyled Useful-Links">
                        <li>
                            <Link to="/" className="text-decoration-none text-dark" onClick={scrollToTop}>Home</Link>
                        </li>
                        <li>
                            <Link to="/create" className="text-decoration-none text-dark" onClick={scrollToTop}>Create New Task</Link>
                        </li>
                        <li>
                            <Link to="/viewtask" className="text-decoration-none text-dark" onClick={scrollToTop}>View Task</Link>
                        </li>
                    </ul>
                </Col>

                {/* Connect Us */}
                <Col xs={12} md={4} className="list-unstyled">
                    <h5 className="fw-bold under-line-footer-text">Connect Us</h5>
                    <p className="mb-1 fw-bold">NavGurukul Campus, Ward Number 202, Uperla Sukar, Dharamshala, Himachal Pradesh 176057</p>
                    <p><FaEnvelope className="me-2 fw-bold" />amit21@navgurukul.org, yadavamit222137@gmail.com</p>
                    <p><FaPhone className="me-1 fw-bold" />+91 9651025253</p>
                    <p className="w-50 text-center whats-app-icon">
                        <a
                            href="https://wa.me/919651025253"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none text-success fw-bold"
                        >
                            <FaWhatsapp className="me-1" style={{ fontSize: '30px' }} />What's App
                        </a>
                    </p>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col className="text-center">
                    <p className="mb-0">
                        &copy; {new Date().getFullYear()} All Rights Reserved
                    </p>
                </Col>
            </Row>
        </footer>
    );
};

export default Footer;