import { Navbar, Container, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon4 from '../assets/images/nav-icon4.svg';
import navIcon5 from '../assets/images/nav-icon5.svg';


export const MainNav = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY >50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }     
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
    <Navbar expand="md" className={scrolled? "scrolled": ""}>
      <Container>
        {/* <Navbar.Brand href="/">
            <img src={logo} alt = 'Logo'/>
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className = {activeLink==='home'? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            {/* <Nav.Link href="#skills" className = {activeLink==='skills'? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link> */}
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/dom2000/" target="blanked"><img src ={navIcon1} alt="Linkedin"/></a>
                <a href="mailto: domchan2000@gmail.com" target="blanked"><img src ={navIcon4} alt="Email"/></a>
                <a href="https://github.com/domchan2000" target="blanked"><img src ={navIcon5} alt="Github"/></a>
            </div>
            {/* <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
