import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faClock } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import './Header.css'

const Header = () => {
    const [dateTime, setDateTime] = useState({
        day: "",
        date: "",
        time: "",
    });

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();

            // Get current day name (IST)
            const optionsDay = { weekday: "long", timeZone: "Asia/Kolkata" };
            const day = now.toLocaleDateString("en-US", optionsDay);

            // Get formatted date (e.g., "Oct 21, 2024")
            const optionsDate = { year: "numeric", month: "short", day: "numeric", timeZone: "Asia/Kolkata" };
            const date = now.toLocaleDateString("en-US", optionsDate);

            // Get formatted time (e.g., "10:45:30 AM")
            const optionsTime = { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true, timeZone: "Asia/Kolkata" };
            const time = now.toLocaleTimeString("en-US", optionsTime);

            setDateTime({ day, date, time });
        };

        // Update the time every second
        const timer = setInterval(updateDateTime, 1000);
        updateDateTime(); // Call immediately

        return () => clearInterval(timer); // Cleanup on unmount
    }, []);

    return (
        <div className="header-bg-color py-2 text-dark">
            <Container> 
                <Row className="align-items-center justify-content-between">
                    {/* Email Section */}
                    <Col xs="auto" className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                        <span>amit21navgurukul.org</span>
                    </Col>

                    {/* Divider */}
                    {/* <div className="vr d-none d-md-block"></div> */}

                    {/* Working Hours */}
                    <Col xs="auto" className="d-flex align-items-center date-time-bg-color">
                        <FontAwesomeIcon icon={faClock} className="me-2" />
                        <span>{dateTime.day}, {dateTime.date} - {dateTime.time} (IST)</span>
                    </Col>

                    {/* Divider */}
                    {/* <div className="vr d-none d-md-block"></div> */}

                    {/* Social Media Links */}
                    <Col xs="auto" className="d-flex align-items-center">
                        <span className="me-2">Follow On:</span>
                        <a href="#" className="text-dark me-2" target="blanck">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                        <a href="https://www.linkedin.com/in/amit-yadav21/" className="text-dark me-2" target="blanck">
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </a>
                        <a href="https://github.com/Amit-Yadav21" className="text-dark me-2" target="blanck">
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;