import React from "react";

import { Navbar, Nav } from 'react-bootstrap';

import { LinkContainer } from "react-router-bootstrap";

function NavbarComp(){
	return (
		<div>
			<Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  			<Navbar.Brand href="#home"><b>Sylvia Wang</b></Navbar.Brand>
  			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
  			<Navbar.Collapse id="responsive-navbar-nav">
    		<Nav className="ms-auto">
				<LinkContainer to ="/home">
				<Nav.Link>Home</Nav.Link>
				</LinkContainer>
				<LinkContainer to="/aboutme">
      			<Nav.Link>About Me</Nav.Link>
				</LinkContainer>
				<LinkContainer to="/experiences">
      			<Nav.Link>Experiences</Nav.Link>
				</LinkContainer>
				<LinkContainer to="/project">
				<Nav.Link>Project</Nav.Link>
				</LinkContainer>
				<LinkContainer to="contact">
				<Nav.Link>Contact</Nav.Link>
				</LinkContainer>	
    		</Nav>
  			</Navbar.Collapse>
			</Navbar>
		</div>
	);
		
		/* <div className="navbar">
		<h1 className="logo"><a href="#">Sylvia Wang</a></h1>
		<ul className="menu">
				<li><a href="#home">Home</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#skills">Skills</a></li>
				<li><a href="#projects">Projects</a></li>
				<li><a href="#contact">Contact</a></li>
		</ul>
	</div> */
};

export default NavbarComp;