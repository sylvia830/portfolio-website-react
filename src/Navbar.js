import React from "react";

function Navbar(){
	return <div className="navbar">
		<h1 className="logo"><a href="#">Sylvia Wang</a></h1>
		<ul className="menu">
				<li><a href="#home">Home</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#skills">Skills</a></li>
				<li><a href="#projects">Projects</a></li>
				<li><a href="#contact">Contact</a></li>
		</ul>
	</div>
};

export default Navbar;