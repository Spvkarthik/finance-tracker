import React from "react";
import Navbar from "../Components/Navbar";
import "./Landingpage.css";
import Logo from "../Assets/logo192.png";
import Socialmedia from "../Components/SocialMedia";
import Home from "../Components/Home";
import AboutUs from "../Components/AboutUs";
import ContactUs from "../Components/ContactUs";

export default function Landingpage() {
    return (
        <>
            <nav className="landing-header container-fluid">
                <div className="logo1">
                    <img src={Logo} alt="Logo" />
                </div>
                <Navbar />
                <Socialmedia />
            </nav>

            <section id="Home1" className="fullscreen-section">
                <Home />
            </section>

            <section id="AboutUs" className="fullscreen-section">
                <AboutUs />
            </section>

            <section id="ContactUs" className="fullscreen-section">
                <ContactUs />
            </section>
        </>
    );
}
