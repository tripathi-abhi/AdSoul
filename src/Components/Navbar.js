import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";

const NavbarComponent = () => {
	return (
		<Navbar className="navbar py-3 px-5">
			<Link to="/">
				<NavbarBrand className="text-white navbar__brand">ADSOUL</NavbarBrand>
			</Link>
		</Navbar>
	);
};

export default NavbarComponent;
