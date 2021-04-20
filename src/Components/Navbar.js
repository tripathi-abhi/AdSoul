import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const NavbarComponent = () => {
	return (
		<Navbar className="navbar py-3 px-5">
			<NavbarBrand href="/" className="text-white navbar__brand">
				ADSOUL
			</NavbarBrand>
		</Navbar>
	);
};

export default NavbarComponent;
