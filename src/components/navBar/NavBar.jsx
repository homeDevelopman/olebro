import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../../assets/img/logo/v1-black.png';

import facebook from '../../assets/img/icons/facebook.svg';
import inst from '../../assets/img/icons/insta.svg';
import vkIcon from '../../assets/img/icons/vk.svg';
import telegram from '../../assets/img/icons/telegram.svg';
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router
} from "react-router-dom";

import './navBar.css';

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="/">
                        <img className={'nav-bar-logo'} src={logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Я Олена</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Мои skills</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Мои работы</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
              <div className="social-icon">

                <a href="#"><img src={facebook} alt="" /></a>
                <a href="#"><img src={inst} alt="" /></a>
                <a href="#"><img src={vkIcon} alt="VK" /></a>
                <a href="#"><img src={telegram} alt="VK" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Давай дружить!</span></button>
              </HashLink>
            </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    )
}
