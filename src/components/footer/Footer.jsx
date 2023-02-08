import React from "react";
import {FaGithub,FaInstagram,FaTwitter,FaLinkedin} from "react-icons/fa";
import { Link } from "react-router-dom";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="socialIcons">
                    <Link to="https://www.instagram.com/jaymishra567/">
                        <span className="icon">
                            <FaInstagram />
                        </span>
                    </Link>
                    <Link to="https://twitter.com/Jaydotme?t=ED4Hf6sDQsSl9Rlq0I6qWw&s=08">
                        <span className="icon">
                            <FaTwitter />
                        </span>
                    </Link>
                    <Link to="https://github.com/Vancey567">
                        <span className="icon">
                            <FaGithub />
                        </span>
                    </Link>
                    <Link to="https://linkedin.com/in/jay-mishra-4a15b01a9">
                        <span className="icon">
                            <FaLinkedin />
                        </span>
                    </Link>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;